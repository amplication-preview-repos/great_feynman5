import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEPARTMENT_TITLE_FIELD } from "./DepartmentTitle";

export const DepartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="teamLead" source="teamLead" />
        <TextField label="deputyTeamLead" source="deputyTeamLead" />
        <ReferenceManyField
          reference="User"
          target="departmentId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Username" source="username" />
            <TextField label="Email" source="email" />
            <TextField label="Roles" source="roles" />
            <ReferenceField
              label="department"
              source="department.id"
              reference="Department"
            >
              <TextField source={DEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
