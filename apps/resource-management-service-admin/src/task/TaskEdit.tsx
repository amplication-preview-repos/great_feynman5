import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="cost" source="cost" />
        <DateTimeInput label="deadline" source="deadline" />
        <TextInput label="originator" source="originator" />
        <TextInput label="assignedTo" source="assignedTo" />
        <TextInput label="mentor" source="mentor" />
      </SimpleForm>
    </Edit>
  );
};
