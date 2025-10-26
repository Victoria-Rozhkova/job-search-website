import { FileItem } from "./common.type";
import { User } from "./user.type";

export interface Comment {
  author: User;
  comment: string;
  likes: number;
}

export interface Post {
  id: number;
  author: User;
  post: string;
  postImage?: FileItem[];
  comments?: Comment[];
  likes: number;
}

export type UpdatePostParams = {
  id: number;
  post: string;
};

export type CreatePostParams = Omit<Post, "id">;
