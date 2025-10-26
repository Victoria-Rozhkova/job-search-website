import React, { useState } from "react";

import LoginForm from "@/features/auth/login-form/ui";
import { useLoginMutation } from "@/shared/model/api/auth.api";
import useAuth from "@/shared/hooks/use-auth";

const Login = () => {
  const auth = useAuth();
  const [error, setError] = useState("");

  const [login] = useLoginMutation();

  const onLogin = (data: any) => {
    login(data)
      .unwrap()
      .then((response) => {
        setError("");
        auth.login(response.user);
      })
      .catch((error) => setError(error.data));
  };

  return <LoginForm login={onLogin} error={error} />;
};

export default Login;
