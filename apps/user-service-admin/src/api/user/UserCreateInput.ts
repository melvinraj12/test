import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  age?: number | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userIdNo?: number | null;
  username: string;
};
