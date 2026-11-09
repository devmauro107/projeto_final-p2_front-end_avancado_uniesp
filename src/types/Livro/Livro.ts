export interface Livro {
  id: number;
  titulo: string;
  autores: string[];
  capaURL?: string;
  descricao?: string;
  editora?: string;
  dataPublicacao?: string;
  numeroPaginas?: number;
  categorias?: string[];
}
