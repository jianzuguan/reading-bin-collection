import React from 'react';
import { TextField } from '@material-ui/core';
import styles from './PostcodeSearchBar.module.css';

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
    <div className={styles.my2}>
      <TextField
        variant="outlined"
        fullWidth
        id="postcode-search-bar"
        label="Postcode"
        value={value}
        onChange={handleTextChange}
        autoFocus
      />
    </div>
  );
};

export default PostcodeSearchBar;
