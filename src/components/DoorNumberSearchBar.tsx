import react from 'react';

interface IProps {
  value: string;
  onChange: (string: string) => void;
}

const DoorNumberSearchBar = (props: IProps) => {
  const {value, onChange} = props;

  const handleTextChange = (event: react.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }

  return (
    <div>
      <label htmlFor="door-number-search-bar">Door Number:</label>
      <input id="door-number-search-bar" value={value} onChange={handleTextChange}/>
    </div>
  )
}

export default DoorNumberSearchBar;