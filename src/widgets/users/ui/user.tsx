import React, { FC } from "react";
import clsx from "clsx";

import { Avatar, Card, Icon } from "@/shared/ui";
import useAuth from "@/shared/hooks/use-auth";
import { useUpdateProfileMutation } from "@/shared/model/api/user.api";
import { setStorage } from "@/shared/hooks/use-storage";
import { User } from "@/shared/model/types/user.type";

const UserItem: FC<{ user: User }> = ({ user }) => {
  const auth = useAuth();

  const [updateProfile] = useUpdateProfileMutation();

  const isFollowedUser = (user: User) => {
    return auth.user?.followedUsers?.some((item) => item.id === user.id);
  };

  function toggleFollowing(user: User) {
    if (auth.user?.id) {
      let followedUsers: User[] = [];
      if (auth.user?.followedUsers && auth.user.followedUsers.length > 0) {
        followedUsers.push(...auth.user.followedUsers);
        if (!isFollowedUser(user)) {
          followedUsers.push(user);
        } else {
          const filtered = followedUsers.filter((u) => u.id !== user.id);
          followedUsers = filtered;
        }
      } else {
        followedUsers?.push(user);
      }
      updateProfile({ id: auth.user?.id, followedUsers })
        .unwrap()
        .then((user) => {
          setStorage("user:LI", user);
          auth.setUser();
        });
    }
  }

  return (
    <Card customStyles="w-full pl-[16px] pt-[32px] pr-[27px] pb-[29px] overflow-visible">
      <div className="flex justify-between mb-[20px]">
        <div className="flex gap-[5px]">
          <Avatar size={80} src={user.avatar?.data_url} />
          <div className="flex flex-col gap-[5px]">
            <p className="text-ro16med text-pri1">
              {user.firstname} {user.lastname}
            </p>
            <div className="text-ro14reg text-pri2 flex gap-[10px]">
              <div
                className={clsx(
                  "flex gap-[5px] cursor-pointer",
                  !isFollowedUser(user)
                    ? "hover:text-primary"
                    : "hover:text-red"
                )}
                onClick={() => toggleFollowing(user)}
              >
                <Icon
                  name={!isFollowedUser(user) ? "PlusCircle" : "MinusCircle"}
                  size={14}
                />
                <span>{!isFollowedUser(user) ? "Follow" : "Unfollow"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserItem;
