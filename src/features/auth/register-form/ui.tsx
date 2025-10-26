import React, { FC, ChangeEvent } from "react";
import { useForm } from "react-hook-form";

import { RegisterFields, RegisterFormProps } from "./model/type";
import { Button, Error, Input, Loading } from "@/shared/ui";
import { route } from "@/shared/lib/routes";
import HeadingPage from "../heading-page/heading-page";

const RegisterForm: FC<RegisterFormProps> = ({
  registration,
  error,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFields>();

  const onRegister = async (data: RegisterFields) => {
    registration({ ...data, fullname: `${data.firstname} ${data.lastname}` });
  };

  function trimSpaceFromValue(
    key: keyof RegisterFields,
    event: ChangeEvent<HTMLInputElement>
  ) {
    setValue(key, event.target.value.trim());
  }

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onRegister)}
    >
      {isLoading && <Loading />}
      <HeadingPage
        heading="h2"
        title="Registration"
        to={route.login}
        titleTo="Login"
      />
      <div className="flex flex-col gap-[10px]">
        <Input
          {...register("email", {
            required: { value: true, message: "Поле не должно быть пустым" },
          })}
          placeholder="email"
          label="Email*"
          onChange={(e) => trimSpaceFromValue("email", e)}
          error={errors.email?.message}
        />
        <Input
          {...register("password", {
            required: { value: true, message: "Поле не должно быть пустым" },
          })}
          placeholder="password"
          label="Password*"
          type="password"
          onChange={(e) => trimSpaceFromValue("password", e)}
          error={errors.password?.message}
        />
        <Input
          {...register("firstname")}
          placeholder="firstname"
          label="Firstname"
          onChange={(e) => trimSpaceFromValue("firstname", e)}
        />
        <Input
          {...register("lastname")}
          placeholder="lastname"
          label="Lastname"
          onChange={(e) => trimSpaceFromValue("lastname", e)}
        />
      </div>
      <Error error={error} />
      <Button type="submit" label="Register" classnames="mt-[15px]" />
    </form>
  );
};

export default RegisterForm;
