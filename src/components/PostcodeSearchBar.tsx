import react from "react";

interface IProps {
  value: string;
  onChange: (text: string) => void;
}

const PostcodeSearchBar = (props: IProps) => {
  const {value, onChange } = props;

  const handleTextChange = (event: react.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="postcode-search-bar">Postcode:</label>
      <input id="postcode-search-bar" value={value} onChange={handleTextChange} autoFocus/>
    </div>
  );
};

export default PostcodeSearchBar;
