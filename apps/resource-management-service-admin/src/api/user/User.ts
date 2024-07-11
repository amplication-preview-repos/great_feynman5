import { JsonValue } from "type-fest";
import { Department } from "../department/Department";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  department?: Department | null;
};
