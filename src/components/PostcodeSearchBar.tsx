import react from "react";

interface IProps {
  onChange: (text: string) => void;
}

const PostcodeSearchBar = (props: IProps) => {
  const { onChange } = props;

  const handleTextChange = (event: react.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="postcode-search-bar">Postcode:</label>
      <input id="postcode-search-bar" onChange={handleTextChange} />
    </div>
  );
};

export default PostcodeSearchBar;
