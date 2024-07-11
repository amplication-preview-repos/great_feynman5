import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
