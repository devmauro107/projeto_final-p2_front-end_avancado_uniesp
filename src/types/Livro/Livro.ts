export interface Livro {
  id: string;
  titulo: string;
  autores: string[];
  capaUrl?: string;
  descricao?: string;
  editora?: string;
  dataPublicacao?: string;
  isbn?: string;
  numeroPaginas?: number;
  categorias?: string[];
}
