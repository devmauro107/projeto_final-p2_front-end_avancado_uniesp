import type { Livro } from "./Livro";

export interface ResultadoBuscaLivro {
  livros: Livro[],
  total: number
}
