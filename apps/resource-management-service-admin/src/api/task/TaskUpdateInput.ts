export type TaskUpdateInput = {
  title?: string | null;
  description?: string | null;
  cost?: number | null;
  deadline?: Date | null;
  originator?: string | null;
  assignedTo?: string | null;
  mentor?: string | null;
};
