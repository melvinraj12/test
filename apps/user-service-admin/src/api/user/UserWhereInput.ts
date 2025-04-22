import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  userIdNo?: IntNullableFilter;
  username?: StringFilter;
};
