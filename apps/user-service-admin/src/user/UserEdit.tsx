import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  PasswordInput,
} from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <NumberInput step={1} label="userIdNo" source="userIdNo" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
