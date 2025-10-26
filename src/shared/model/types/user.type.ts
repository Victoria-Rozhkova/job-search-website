import { FileItem, PaginationType } from "./common.type";
import { Post } from "./post.type";

export type OptionalUserFields = {
  firstname?: string;
  lastname?: string;
  fullname?: string;
  status?: string;
  avatar?: FileItem | null;
  skills?: string;
  hashtags?: Hashtag[];
  saved?: Post[];
  followedUsers?: User[];
};

type Hashtag = {
  followed: string;
};

export type User = {
  id: number;
  email: string;
} & OptionalUserFields;

export type UpdateUserParams = {
  id: number;
  email?: string;
} & OptionalUserFields;

export type GetUserParams = {
  q?: string;
  fullname_like?: string;
} & PaginationType;
