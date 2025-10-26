import React from "react";

import {
  Accordion,
  Avatar,
  Card,
  Icon,
  Link,
  Loading,
  Radio,
} from "@/shared/ui";
import { route } from "@/shared/lib/routes";
import {
  useGetUsersQuery,
  useUpdateProfileMutation,
} from "@/shared/model/api/user.api";
import useAuth from "@/shared/hooks/use-auth";
import { setStorage } from "@/shared/hooks/use-storage";
import { User } from "@/shared/model/types/user.type";
import { v4 } from "uuid";

const RightLayoutBlock = () => {
  const auth = useAuth();

  const { data, isLoading } = useGetUsersQuery({});
  const [updateProfile] = useUpdateProfileMutation();

  function toggleFollowing(user: User) {
    if (auth.user?.id) {
      const followedUsers: User[] = [];
      if (auth.user?.followedUsers && auth.user.followedUsers.length > 0) {
        followedUsers.push(...auth.user.followedUsers);
        !isFollowedUser(user) && followedUsers.push(user);
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

  const isFollowedUser = (user: User) => {
    return auth.user?.followedUsers?.some((item) => item.id === user.id);
  };

  const getCoursesContent = (title: string, name: string, view: string) => {
    return (
      <div className="flex gap-[25px] items-center">
        <div className="flex flex-col gap-[5px]">
          <p className="text-ro14reg text-pri1 w-[200px]">{title}</p>
          <p className="text-ro12reg text-pri2">{name}</p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <Icon name="Eye" size={16} />
          <p className="text-ro12reg text-pri3">{view}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Card customStyles="mb-[50px]">
        <div className="pt-[32px] px-[22px] pb-[54px]">
          <Accordion title="Following" variant="medium">
            <div className="pt-[24px]">
              <div className="flex flex-col gap-[15px]">
                {isLoading && <Loading />}
                {data
                  ?.filter(
                    (user) => user.id !== auth.user?.id && !isFollowedUser(user)
                  )
                  .slice(0, 4)
                  .map((user) => {
                    return (
                      <div
                        key={user.id}
                        className="flex gap-[10px] items-center justify-between"
                      >
                        <div className="flex items-center gap-[13px]">
                          <Avatar src={user.avatar?.data_url} />
                          <div>
                            <p className="text-ro16med truncate pb-[5px]">
                              {user.firstname} {user.lastname}
                            </p>
                            <p className="text-op12reg text-pri2 truncate w-[150px]">
                              {user.status}
                            </p>
                          </div>
                        </div>
                        <div onClick={() => toggleFollowing(user)}>
                          <Icon name="Plus" className="hover:text-primary" />
                        </div>
                      </div>
                    );
                  })}
                <Link
                  to={route.users}
                  title="More Recomendation"
                  variant="medium"
                />
              </div>
            </div>
          </Accordion>
        </div>
      </Card>
      <Card>
        <div className="pt-[32px] px-[22px] pb-[54px]">
          <Accordion title="Courses Populer" variant="medium">
            <div className="flex flex-col gap-[10px] mb-[20px] pt-[20px]">
              {getCoursesContent(
                "Learning UX Design - Mobile apps",
                "Thomas Wick",
                "50+"
              )}
              {getCoursesContent(
                "How to Be UI Design",
                "Alan UI Design",
                "150+"
              )}
              {getCoursesContent(
                "How to Be Develover Golang",
                "Rubicode",
                "50+"
              )}
              {getCoursesContent(
                "Tips and Trick Freelance",
                "purwanstudio",
                "520+"
              )}
            </div>
            <Link to={""} title="Courses Populer" variant="medium" />
          </Accordion>
        </div>
      </Card>
      <Card customStyles="mt-[15px]">
        <div className="py-[40px] pl-[18px] pr-[16px]">
          <div className="flex gap-[5px] pb-[28px]">
            <Icon name="LogoFull" />
            <p className="text-ro14med text-pri1">
              LinkedIn Corporation © 2021
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-[20px]">
            <Radio
              label="About"
              labelWidth="text-xs"
              name="about"
              checked
              value="about"
              id={v4()}
            />
            <Radio
              label="Advertising"
              labelWidth="text-xs"
              name="advertising"
              checked
              value="advertising"
              id={v4()}
            />
            <Radio
              label="Accesibility"
              labelWidth="text-xs"
              name="accesibility"
              checked
              value="accesibility"
              id={v4()}
            />{" "}
            <Radio
              label="Business Services"
              labelWidth="text-xs"
              name="businessServices"
              checked
              value="businessServices"
              id={v4()}
            />
            <Radio
              label="Help Center"
              labelWidth="text-xs"
              name="helpCenter"
              checked
              value="helpCenter"
              id={v4()}
            />
            <Radio
              label="Download Apps"
              labelWidth="text-xs"
              name="downloadApps"
              checked
              value="downloadApps"
              id={v4()}
            />
            <Radio
              label="Privacy & Terms"
              labelWidth="text-xs"
              name="privacyTerms"
              checked
              value="privacyTerms"
              id={v4()}
            />
            <Radio
              label={<Link to="" title="More" />}
              labelWidth="text-xs"
              name="More"
              checked
              value="More"
              id={v4()}
            />
          </div>
        </div>
      </Card>

      <Card customStyles="mt-[10px] mb-[100px]">
        <div className="py-[10px] px-[30px] flex items-center gap-[12px]">
          <Icon name="MessageFull" size={28} />
          <span className="text-ro14med text-pri2">Message</span>
        </div>
      </Card>
    </div>
  );
};

export default RightLayoutBlock;
