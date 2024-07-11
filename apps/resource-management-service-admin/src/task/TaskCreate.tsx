import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="cost" source="cost" />
        <DateTimeInput label="deadline" source="deadline" />
        <TextInput label="originator" source="originator" />
        <TextInput label="assignedTo" source="assignedTo" />
        <TextInput label="mentor" source="mentor" />
      </SimpleForm>
    </Create>
  );
};
