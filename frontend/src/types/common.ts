export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface AttributesBase {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface DynamicZone {
  __component: string;
}

export interface Image {
  id: number;
  src: string;
  alt: string;
}

export interface TextSection {
  id: number;
  title: string;
  text: string;
}

export interface Item {
  id: number;
  title: string;
}