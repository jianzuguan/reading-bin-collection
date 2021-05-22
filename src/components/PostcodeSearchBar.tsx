import React from 'react';
import { TextField } from '@material-ui/core';

interface IProps {
  value: string;
  onChange: (text: string) => void;
}

const PostcodeSearchBar = (props: IProps) => {
  const { value, onChange } = props;

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      variant="outlined"
      fullWidth
      id="postcode-search-bar"
      label="Postcode"
      value={value}
      onChange={handleTextChange}
      autoFocus
    />
  );
};

export default PostcodeSearchBar;
