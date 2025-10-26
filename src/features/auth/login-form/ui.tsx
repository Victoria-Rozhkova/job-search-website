import React, { FC, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { LoginFields, LoginFormProps } from "./model/type";
import { Button, Error, Input, Loading } from "@/shared/ui";
import HeadingPage from "../heading-page/heading-page";
import { route } from "@/shared/lib/routes";

const LoginForm: FC<LoginFormProps> = ({ login, error, isLoading }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFields>();

  const onLogin = async (data: LoginFields) => {
    login(data);
  };

  function trimSpaceFromValue(
    key: keyof LoginFields,
    event: ChangeEvent<HTMLInputElement>
  ) {
    setValue(key, event.target.value.trim());
  }

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onLogin)}
    >
      {isLoading && <Loading />}
      <HeadingPage
        heading="h2"
        title="Login"
        to={route.register}
        titleTo="Registration"
      />
      <div className="flex flex-col gap-[10px]">
        <Input
          {...register("email", {
            required: { value: true, message: "Поле не должно быть пустым" },
          })}
          placeholder="email"
          label="Email"
          onChange={(e) => trimSpaceFromValue("email", e)}
          error={errors.email?.message}
        />
        <Input
          {...register("password", {
            required: { value: true, message: "Поле не должно быть пустым" },
          })}
          placeholder="password"
          label="Password"
          type="password"
          onChange={(e) => trimSpaceFromValue("password", e)}
          error={errors.password?.message}
        />
      </div>
      <Error error={error} />
      <Button type="submit" label="Login" classnames="mt-[15px]" />
    </form>
  );
};

export default LoginForm;
