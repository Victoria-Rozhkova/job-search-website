import { OptionalUserFields, User } from "./user.type";

export type AuthResponse = {
  accessToken: string;
  user: User;
};

export type ProviderAuthContext = {
  user: User | null;
  setUser: () => void;
  login: (user: User) => void;
  logout: () => void;
  isFetching: boolean;
};

export type RegistrationData = LoginData & OptionalUserFields;

export type LoginData = {
  email: string;
  password: string;
};
