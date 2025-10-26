import React, { FC } from "react";
import UserItem from "./user";
import { FilteredUsersProps } from "./model/types";
import useAuth from "@/shared/hooks/use-auth";

const FilteredUsers: FC<FilteredUsersProps> = ({ users }) => {
  const auth = useAuth();

  return (
    <>
      {users
        ?.filter((user) => user.id !== auth.user?.id)
        .map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
    </>
  );
};

export default FilteredUsers;
