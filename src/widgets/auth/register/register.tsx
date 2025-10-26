import React, { useState } from "react";

import RegisterForm from "@/features/auth/register-form/ui";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/shared/model/api/auth.api";
import { RegistrationData } from "@/shared/model/types/auth.type";
import useAuth from "@/shared/hooks/use-auth";

const Register = () => {
  const auth = useAuth();

  const [error, setError] = useState("");

  const [register, { isLoading: registerLoading }] = useRegisterMutation();
  const [login, { isLoading: loginLoading }] = useLoginMutation();

  const onRegister = (data: RegistrationData) => {
    register(data)
      .unwrap()
      .then(() => {
        login({ email: data.email, password: data.password })
          .unwrap()
          .then((response) => {
            setError("");
            auth.login(response.user);
          })
          .catch((error) => setError(error.data));
      })
      .catch((error) => setError(error.data));
  };

  return (
    <RegisterForm
      registration={onRegister}
      error={error}
      isLoading={registerLoading || loginLoading}
    />
  );
};

export default Register;
