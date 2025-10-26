import React, { FC, ChangeEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";

import { Card, Input, Loading, Radio } from "@/shared/ui";
import { FormFields, Status, UserSearchProps } from "./model/types";
import useAuth from "@/shared/hooks/use-auth";

const UserSearch: FC<UserSearchProps> = (props) => {
  const {
    loading,
    onChangeSearch,
    setFilteredUsers,
    users,
    allUsers,
    changeStatus,
  } = props;

  const auth = useAuth();

  const { register, watch, setValue } = useForm<FormFields>({
    defaultValues: { status: "all", search: "" },
  });

  const search = watch().search;
  const status: Status = watch().status;

  function clearSearch() {
    setValue("search", "");
  }

  function changeSearch(e: ChangeEvent<HTMLInputElement>) {
    setValue("search", e.target.value);
    onChangeSearch({ search: e.target.value, status });
  }

  useEffect(() => {
    if (!users.length) return;
    if (users) {
      if (status === "all") {
        setFilteredUsers(users);
        changeStatus(status);
      } else if (status === "followed") {
        setFilteredUsers(auth.user?.followedUsers || []);
        changeStatus(status);
      } else {
        const filtered =
          allUsers?.filter(
            ({ id: id1 }) =>
              !auth.user?.followedUsers?.some(
                ({ id: id2 }) => id2 === id1 && id1 !== auth.user?.id
              )
          ) || [];

        setFilteredUsers(filtered);
        changeStatus(status);
      }
    }
  }, [status, users]);

  if (loading) return <Loading />;

  return (
    <Card customStyles="w-full py-[10px] px-[10px]">
      <Input
        {...register("search")}
        placeholder="Search user"
        beforeIcon="Search"
        icon={search ? "Close" : undefined}
        onIconClick={clearSearch}
        onChange={changeSearch}
      />
      <div className="flex gap-[10px] justify-around pt-[15px]">
        <Radio
          label="All"
          {...register("status")}
          checked={status === "all"}
          value="all"
          id={v4()}
        />
        <Radio
          label="Followed"
          {...register("status")}
          checked={status === "followed"}
          value="followed"
          id={v4()}
        />
        <Radio
          label="UnFollowed"
          {...register("status")}
          checked={status === "unfollowed"}
          value="unfollowed"
          id={v4()}
        />
      </div>
    </Card>
  );
};

export default UserSearch;
