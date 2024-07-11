import { User } from "../user/User";

export type Department = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  teamLead: string | null;
  deputyTeamLead: string | null;
  users?: Array<User>;
};
