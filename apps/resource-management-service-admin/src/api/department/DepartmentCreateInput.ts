import { UserCreateNestedManyWithoutDepartmentsInput } from "./UserCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  name?: string | null;
  teamLead?: string | null;
  deputyTeamLead?: string | null;
  users?: UserCreateNestedManyWithoutDepartmentsInput;
};
