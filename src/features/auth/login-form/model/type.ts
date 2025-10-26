export type LoginFormProps = {
  error?: string;
  isLoading?: boolean;
  login: (data: LoginFields) => void;
};

export type LoginFields = {
  email: string;
  password: string;
};
