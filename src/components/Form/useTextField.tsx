import { TextField, TextFieldProps } from '@material-ui/core';
import React, { useState } from 'react';

/**
 * Custom hook which returns the input field value and a predefined TextField
 * @param label Label for input field
 * @param type Type of input field
 */
export default function useTextField(
  label: string
): [string, TextFieldProps, React.FC<TextFieldProps>] {
  const [value, setValue] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const inputProps: TextFieldProps = {
    value,
    label,
    onChange: handleInput,
  };

  return [value, inputProps, InputField];
}

const InputField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  error,
  ...otherProps
}) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      margin="normal"
      fullWidth
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  );
};
