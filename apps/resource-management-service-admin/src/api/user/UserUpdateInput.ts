import { InputJsonValue } from "../../types";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  department?: DepartmentWhereUniqueInput | null;
};
