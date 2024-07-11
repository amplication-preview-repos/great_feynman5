import { UserUpdateManyWithoutDepartmentsInput } from "./UserUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  name?: string | null;
  teamLead?: string | null;
  deputyTeamLead?: string | null;
  users?: UserUpdateManyWithoutDepartmentsInput;
};
