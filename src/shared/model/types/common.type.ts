export interface FileItem {
  name: string;
  data_url: string;
  size: number;
}

export type PaginationType = {
  _page?: number;
  _limit?: number;
};
