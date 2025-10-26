import React, { useState } from "react";

import { useGetUsersQuery } from "@/shared/model/api/user.api";
import { Paginator } from "@/shared/ui";
import useDebounce from "@/shared/hooks/use-debounce";
import { User } from "@/shared/model/types/user.type";
import { FormFields, Status, UserSearch } from "@/features/users/search-form";
import { Filters } from "./model/types";
import FilteredUsers from "./filtered-users";

const Users = () => {
  const LIMIT = 5;

  const [filters, setFilters] = useState<Filters>({ page: 1, status: "all" });

  const debouncedSearch = useDebounce(filters.search);

  const { data: response } = useGetUsersQuery({});
  const { data: users, isLoading } = useGetUsersQuery({
    _page: filters.page,
    _limit: LIMIT,
    fullname_like: debouncedSearch,
  });

  const [filteredUsers, setFilteredUsers] = useState<User[]>(users || []);

  function onChangeSearch(data: FormFields) {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      search: data.search,
      status: data.status,
    }));
  }

  const changeStatus = (status: Status) => {
    setFilters((prev) => ({ ...prev, status }));
  };

  return (
    <div className="w-full flex flex-col gap-[10px] mb-[60px]">
      <UserSearch
        loading={isLoading}
        onChangeSearch={onChangeSearch}
        setFilteredUsers={setFilteredUsers}
        changeStatus={changeStatus}
        users={users || []}
        allUsers={response || []}
      />
      <FilteredUsers users={filteredUsers} />
      {filters.status === "all" && (
        <Paginator
          page={filters.page}
          limit={LIMIT}
          count={response?.length || 0}
          onChange={(page) => setFilters((prev) => ({ ...prev, page }))}
        />
      )}
    </div>
  );
};

export default Users;
