import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core';
import React, { useState } from 'react';

/**
 * Custom hook to return a select input field with common predefined props
 * @param label Title of select input to be displayed
 * @param id HTML id attribute of input
 * @param options options of select as an array of {value, label}
 * @param defaultValue optional starting value of select input
 */
export default function useSelect(
  label: string,
  id: string,
  options: { value: string; label: string }[],
  defaultValue?: string
): [string, Props, React.FC<Props>] {
  const [value, setValue] = useState(defaultValue ?? '');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  const selectProps = { label, id, options, value, handleChange };
  return [value, selectProps, FormSelect];
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));

interface Props {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  value: string;
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  required?: boolean;
}

const FormSelect: React.FC<Props> = ({
  label,
  id,
  options,
  value,
  handleChange,
  required,
}) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl} required={required}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select labelId={id} value={value} onChange={handleChange}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
