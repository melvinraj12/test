import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userIdNo" source="userIdNo" />
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
