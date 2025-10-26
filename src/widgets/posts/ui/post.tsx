import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import clsx from "clsx";

import {
  Avatar,
  Card,
  Dropdown,
  Icon,
  Input,
  Link,
  Loading,
  Modal,
  Popconfirm,
} from "@/shared/ui";
import { Post } from "@/shared/model/types/post.type";
import useAuth from "@/shared/hooks/use-auth";
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "@/shared/model/api/post.api";
import Actions from "./actions";
import { User } from "@/shared/model/types/user.type";
import {useGetUsersQuery, useUpdateProfileMutation} from "@/shared/model/api/user.api";
import { setStorage } from "@/shared/hooks/use-storage";
import { DropdownData } from "@/shared/ui/dropdown/dropdown.type";
import { NewPostFields } from "@/widgets/new-post/model/types";

const PostItem: FC<{ posts: Post[] }> = ({ posts }) => {
  const { register, watch, setValue } = useForm<NewPostFields>();
  const post = watch().post;
  const auth = useAuth();

  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [error, setError] = useState("");

  const { data: users } = useGetUsersQuery({});
  const [deletePost, { isLoading: isLoadingDelete }] = useDeletePostMutation();
  const [updateProfile] = useUpdateProfileMutation();
  const [updatePost, { isLoading: isLoadingUpdate }] = useUpdatePostMutation();

  const dropdownData: DropdownData[] = [
    {
      id: v4(),
      title: (
        <Popconfirm
          title="Delete?"
          onConfirm={() => {
            if (currentPost) onDeletePost(currentPost.id);
          }}
          width={170}
          placement="left"
        >
          <>Delete</>
        </Popconfirm>
      ),
    },
    {
      id: v4(),
      title: "Edit",
      onClick: () => setShowEditModal(true),
      setState: true,
    },
  ];

  const onDeletePost = (id: number) => {
    deletePost(id);
  };

  const onUpdatePost = () => {
    if (currentPost?.id) {
      updatePost({ id: currentPost.id, post })
        .unwrap()
        .then(() => {
          setError("");
          setShowEditModal(false);
        })
        .catch((err) => setError(err));
    }
  };

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

  const getAvatarFromUser = (authorId: number) => {
    const foundUser = users?.find(user => user.id === authorId);

    return foundUser?.avatar?.data_url || "";
  };


  useEffect(() => {
    if (currentPost) {
      setValue("post", currentPost.post);
    }
  }, [currentPost?.id]);

  return (
    <div className="flex flex-col gap-[10px]">
      {(isLoadingDelete || isLoadingUpdate) && <Loading fullScreen />}
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            customStyles="w-full pl-[16px] pt-[32px] pr-[27px] pb-[29px] overflow-visible"
          >
            <div className="flex justify-between mb-[20px]">
              <div className="flex gap-[5px]">

                <Avatar src={getAvatarFromUser(post.author.id)} size={60}/>

                <div className="flex flex-col gap-[5px]">

                  <p className="text-ro14med text-pri1">
                    {post.author.fullname}
                  </p>
                  <p className="text-op12reg text-pri2">{post.author.status}</p>
                  <div className="text-ro12reg text-pri2 flex gap-[10px]">
                    <p>1 hr ago</p>
                    {auth.user?.id !== post.author.id && (
                        <div
                            className={clsx(
                                "flex gap-[5px] cursor-pointer",
                                !isFollowedUser(post.author)
                                    ? "hover:text-primary"
                                    : "hover:text-red"
                            )}
                            onClick={() => toggleFollowing(post.author)}
                        >
                          <Icon
                              name={
                                !isFollowedUser(post.author)
                                    ? "PlusCircle"
                                    : "MinusCircle"
                              }
                              size={14}
                          />
                          <span>
                          {!isFollowedUser(post.author) ? "Follow" : "Unfollow"}
                        </span>
                        </div>
                    )}
                  </div>
                </div>
              </div>
              {post.author.id === auth.user?.id && (
                <div onClick={() => setCurrentPost(post)}>
                  <Dropdown data={dropdownData} showArrow={false}>
                    <div className="cursor-pointer hover:text-primary">
                      <Icon name="MoreHorizontal" size={24} />
                    </div>
                  </Dropdown>
                </div>
              )}
            </div>
            <div className="text-op12reg text-pri2 mb-[15px]">{post.post}</div>

            <div className="text-ro12med text-green2 text-right mb-[5px]">
              <Link title="More Article" to="" />
            </div>
            <p className="text-ro12med text-pri2 mb-[5px]">See translate</p>
            {post.postImage?.map((image) => {
              return (
                <img
                  key={v4()}
                  className="w-full rounded-[12px] mb-[15px]"
                  src={image.data_url}
                  alt="image"
                />
              );
            })}

            <Actions />
          </Card>
        );
      })}
      <Modal
        value={showEditModal}
        setValue={setShowEditModal}
        title="Edit post"
        size="large"
        cancelText="Cancel"
        confirmText="Edit"
        onConfirm={() => onUpdatePost()}
      >
        <Input {...register("post")} placeholder="Edit post" error={error} />
      </Modal>
    </div>
  );
};

export default PostItem;
