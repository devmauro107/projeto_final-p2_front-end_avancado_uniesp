import axios from "axios";
import type {
  GoogleBooksItemDTO,
  GoogleBooksSearchResponseDTO,
} from "../types/GoogleBooks/GoogleBook";
import type { Livro } from "../types/Livro/Livro";
import type { ResultadoBuscaLivro } from "../types/Livro/ResultadoBuscaLivro";
import { api } from "./api";

export class ErroLivros extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ErroLivros";
  }
}

export class LivroService {
  private static mapear(item: GoogleBooksItemDTO): Livro {
    const book: Livro = {
      id: item.id,
      titulo: item.volumeInfo.title ?? "Titulo Indisponivel",
      autores: item.volumeInfo.authors ?? [],
    };

    const capa =
      item.volumeInfo.imageLinks?.thumbnail ||
      item.volumeInfo.imageLinks?.smallThumbnail;
    if (capa) {
      book.capaUrl = capa.replace("http://", "https://");
    }

    const descricao = item.volumeInfo.description;
    if (descricao) {
      book.descricao = descricao;
    }

    const editora = item.volumeInfo.publisher;
    if (editora) {
      book.editora = editora;
    }

    const dataPublicacao = item.volumeInfo.publishedDate;
    if (dataPublicacao) {
      book.dataPublicacao = dataPublicacao;
    }

    const isbn =
      item.volumeInfo.industryIdentifiers?.find(
        (identifier) => identifier.type === "ISBN_13",
      )?.identifier ||
      item.volumeInfo.industryIdentifiers?.find(
        (identifier) => identifier.type === "ISBN_10",
      )?.identifier;
    if (isbn) {
      book.isbn = isbn;
    }

    const numeroPaginas = item.volumeInfo.pageCount;
    if (numeroPaginas) {
      book.numeroPaginas = numeroPaginas;
    }

    const categorias = item.volumeInfo.categories;
    if (categorias) {
      book.categorias = categorias;
    }

    return book;
  }

  private static criarErro(erro: unknown): ErroLivros {
    if (erro instanceof ErroLivros) {
      return erro;
    } else if (axios.isAxiosError(erro)) {
      if (erro.code === "ECONNABORTED") {
        return new ErroLivros("A BUSCA DEMOROU DEMAIS, TENTE NOVAMENTE");
      } else if (!erro.response) {
        return new ErroLivros("Sem conexão com a internet");
      } else if (erro.response.status === 404) {
        return new ErroLivros("Livro não encontrado");
      } else if (erro.response.status === 429) {
        return new ErroLivros("Atingiu a cota P/dia ou P/min");
      }
    }
    return new ErroLivros("Erro Inesperado");
  }

  public static async buscar(termo: string): Promise<ResultadoBuscaLivro> {
    const termoLimpo = termo.trim();

    if (termoLimpo === "") {
      return {
        livros: [],
        total: 0,
      };
    }

    try {
      const resposta = await api.get<GoogleBooksSearchResponseDTO>("/volumes", {
        params: {
          q: termoLimpo,
          maxResults: 10,
          printType: "books",
        },
      });

      const dados = resposta.data;

      return {
        livros: (dados.items ?? []).map((item) => LivroService.mapear(item)),
        total: dados.totalItems,
      };
    } catch (error) {
      throw LivroService.criarErro(error);
    }
  }
}
