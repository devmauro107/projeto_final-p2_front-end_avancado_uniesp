export interface GoogleBooksImageLinksDTO {
  smallThumbnail?: string;
  thumbnail?: string;
}
export interface GoogleBooksIndustryIdentifierDTO {
  type: string;
  identifier: string;
}
export interface GoogleBooksVolumeInfoDTO {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  categories?: string[];
  imageLinks?: GoogleBooksImageLinksDTO;
  industryIdentifiers?: GoogleBooksIndustryIdentifierDTO[];
}
export interface GoogleBooksItemDTO {
  id: string;
  volumeInfo: GoogleBooksVolumeInfoDTO;
}
export interface GoogleBooksSearchResponseDTO {
  kind: string;
  totalItems: number;
  items?: GoogleBooksItemDTO[];
}
