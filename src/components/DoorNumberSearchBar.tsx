import React from 'react';
import { TextField } from '@material-ui/core';

interface IProps {
  value: string;
  onChange: (string: string) => void;
}

const DoorNumberSearchBar = (props: IProps) => {
  const { value, onChange } = props;

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
      <TextField
        variant="outlined"
        fullWidth
        id="door-number-search-bar"
        label="Door Number"
        value={value}
        onChange={handleTextChange}

      />
  );
};

export default DoorNumberSearchBar;
