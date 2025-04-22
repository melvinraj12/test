import { JsonValue } from "type-fest";

export type User = {
  age: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userIdNo: number | null;
  username: string;
};
