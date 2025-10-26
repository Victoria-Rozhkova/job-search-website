import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { UpdateAvatar } from "@/features/update-avatar";
import useAuth from "@/shared/hooks/use-auth";
import { setStorage } from "@/shared/hooks/use-storage";
import { useUpdateProfileMutation } from "@/shared/model/api/user.api";
import { FileItem } from "@/shared/model/types/common.type";
import { Button, Input, Upload } from "@/shared/ui";
import Header from "@/widgets/header";
import { FormFields } from "./model/types";

const ProfilePage = () => {
  const auth = useAuth();

  const { register, setValue, handleSubmit } = useForm<FormFields>();

  const [updateProfile] = useUpdateProfileMutation();

  function changeAvatar(avatar: FileItem) {
    if (auth.user?.id) {
      updateProfile({ id: auth.user?.id, avatar })
        .unwrap()
        .then((user) => {
          setStorage("user:LI", user);
          auth.setUser();
        });
    }
  }

  function deleteAvatar() {
    if (auth.user?.id) {
      updateProfile({ id: auth.user?.id, avatar: null })
        .unwrap()
        .then((user) => {
          setStorage("user:LI", user);
          auth.setUser();
        });
    }
  }

  const saveProfile = (data: FormFields) => {
    if (auth.user?.id) {
      const fullname = `${data.firstname} ${data.lastname}` || "";
      updateProfile({ id: auth.user?.id, ...data, fullname })
        .unwrap()
        .then((user) => {
          setStorage("user:LI", user);
          auth.setUser();
        });
    }
  };

  useEffect(() => {
    if (auth.user?.id) {
      setValue("email", auth.user.email);
      setValue("skills", auth.user.skills);
      setValue("firstname", auth.user.firstname);
      setValue("lastname", auth.user.lastname);
    }
  }, [auth.user]);

  return (
    <>
      <Header />
      <div className="mt-[20px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <Upload
            elem={<UpdateAvatar onDelete={deleteAvatar} />}
            accept=".png, .jpg, .jpeg"
            drag={false}
            value={null}
            url={auth.user?.avatar?.data_url}
            onChange={changeAvatar}
          />
          <Input placeholder="Email" {...register("email")} />
          <Input
            placeholder="Password"
            {...register("password")}
            type="password"
          />
          <Input placeholder="First name" {...register("firstname")} />
          <Input placeholder="Last name" {...register("lastname")} />
          <Input placeholder="Skills" {...register("skills")} />
          <Button label="Save" onClick={handleSubmit(saveProfile)} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
