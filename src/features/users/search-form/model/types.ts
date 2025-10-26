import { User } from "@/shared/model/types/user.type";

export type UserSearchProps = {
  users: User[];
  allUsers: User[];
  loading?: boolean;
  onChangeSearch: (data: FormFields) => void;
  setFilteredUsers: (users: User[]) => void;
  changeStatus: (status: Status) => void;
};

export type FormFields = {
  status: Status;
  search: string;
};

export type Status = "all" | "followed" | "unfollowed";
