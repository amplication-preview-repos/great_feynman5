import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  cost?: FloatNullableFilter;
  deadline?: DateTimeNullableFilter;
  originator?: StringNullableFilter;
  assignedTo?: StringNullableFilter;
  mentor?: StringNullableFilter;
};
