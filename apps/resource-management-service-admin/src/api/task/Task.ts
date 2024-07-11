export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  cost: number | null;
  deadline: Date | null;
  originator: string | null;
  assignedTo: string | null;
  mentor: string | null;
};
