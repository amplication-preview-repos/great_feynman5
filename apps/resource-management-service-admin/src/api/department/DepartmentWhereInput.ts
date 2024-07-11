import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type DepartmentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  teamLead?: StringNullableFilter;
  deputyTeamLead?: StringNullableFilter;
  users?: UserListRelationFilter;
};
