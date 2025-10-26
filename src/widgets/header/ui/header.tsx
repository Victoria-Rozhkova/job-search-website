import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { v4 } from "uuid";

import { LinkType } from "../model/types";
import Dropdown from "@/shared/ui/dropdown/dropdown";
import { DropdownData } from "@/shared/ui/dropdown/dropdown.type";
import { Avatar, Icon, Input } from "@/shared/ui";
import useAuth from "@/shared/hooks/use-auth";
import { route } from "@/shared/lib/routes";

const Header = () => {
  const auth = useAuth();

  const links: LinkType[] = [
    { id: v4(), icon: "Home", to: route.home },
    { id: v4(), icon: "People", to: route.users },
    // { id: v4(), icon: "Business", to: "/business" },
    // { id: v4(), icon: "Message", to: "/message" },
    // { id: v4(), icon: "Alerts", to: "/alerts" },
  ];

  const { register, watch, setValue } = useForm<{ search: string }>();

  const search = watch().search;

  const dropdownData: DropdownData[] = useMemo(() => {
    return [
      { id: v4(), to: route.profile, title: "Profile" },
      { id: v4(), title: "Logout", onClick: () => auth.logout() },
    ];
  }, []);

  function clearSearch() {
    setValue("search", "");
  }

  return (
    <div className="h-[89px] flex items-center justify-center bg-white">
      <Icon name="Logo" size={45} />
      <div className="mr-[25px] ml-[32px]">
        <Input
          {...register("search")}
          placeholder="Search Jobs"
          beforeIcon="Search"
          icon={search ? "Close" : undefined}
          onIconClick={clearSearch}
        />
      </div>

      <div className="flex items-center justify-center gap-[30px]">
        {links.map((link) => {
          return (
            <NavLink
              key={link.id}
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  `h-[45px] w-[45px] flex justify-center items-center rounded-[15px] text-white hover:opacity-90 ${
                    !isActive ? "bg-secondary" : "bg-primary"
                  }`
                )
              }
            >
              <Icon key={link.id} name={link.icon} size={18} />
            </NavLink>
          );
        })}
      </div>
      <div className="h-[45px] border border-r border-gray w-[1px] ml-[40px]"></div>
      <div className="ml-[60px] flex items-center gap-[7px]">
        <Avatar src={auth.user?.avatar?.data_url} size={40} variant="small" />
        <Dropdown data={dropdownData}>{`${
          auth.user?.firstname || "No firstname"
        } ${auth.user?.lastname || "No lastname"}`}</Dropdown>
      </div>
    </div>
  );
};

export default Header;
