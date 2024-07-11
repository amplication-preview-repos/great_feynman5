import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="cost" source="cost" />
        <TextField label="deadline" source="deadline" />
        <TextField label="originator" source="originator" />
        <TextField label="assignedTo" source="assignedTo" />
        <TextField label="mentor" source="mentor" />
      </SimpleShowLayout>
    </Show>
  );
};
