import { FileItem } from "@/shared/model/types/common.type";
import { Post } from "@/shared/model/types/post.type";
import { User } from "@/shared/model/types/user.type";

export type FormFields = {
  email?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  fullname?: string;
  status?: string;
  avatar?: FileItem | null;
  skills?: string;
  // hashtags?: Hashtag[];
  saved?: Post[];
  followedUsers?: User[];
};
