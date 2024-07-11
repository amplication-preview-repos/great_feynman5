import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  department?: DepartmentWhereUniqueInput;
};
