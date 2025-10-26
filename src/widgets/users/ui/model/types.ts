import { Status } from "@/features/users/search-form";
import { User } from "@/shared/model/types/user.type";

export type Filters = {
  page: number;
  limit?: number;
  search?: string;
  status?: Status;
};

export type FilteredUsersProps = { users: User[] };
