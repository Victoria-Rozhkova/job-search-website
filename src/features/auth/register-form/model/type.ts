export type RegisterFormProps = {
  error?: string;
  isLoading?: boolean;
  registration: (data: RegisterFields) => void;
};

export type RegisterFields = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  fullname: string
};
