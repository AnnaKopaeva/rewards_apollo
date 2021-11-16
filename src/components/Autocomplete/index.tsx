import * as React from "react";
import { FormikProps, FieldInputProps } from "formik";

import Autocomplete from "@mui/material/Autocomplete";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export interface FormFieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<any>;
}

type FormikAutocompleteProps<T> = FormFieldProps & {
  options: T[];
  textFieldProps: TextFieldProps;
};

function FormikAutocomplete<T extends { name: string }>({
  options,
  form,
  field,
  textFieldProps,
}: FormikAutocompleteProps<T>): JSX.Element {
  const { name } = field;
  const { setTouched, setFieldValue } = form;

  return (
    <Autocomplete
      {...field}
      options={options}
      fullWidth
      getOptionLabel={(option) => option.name}
      onChange={(_, value) => setFieldValue(name, value)}
      onBlur={() => setTouched({ [name]: true })}
      renderInput={(inputProps) => (
        <TextField
          {...inputProps}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          InputProps={{ ...inputProps.InputProps, placeholder: textFieldProps.placeholder }}
          {...textFieldProps}
        />
      )}
    />
  );
}

export default FormikAutocomplete;
