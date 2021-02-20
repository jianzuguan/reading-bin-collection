import react from 'react';

interface IProps {
  onChange: (string: string) => void;
}

const DoorNumberSearchBar = (props: IProps) => {
  const {onChange} = props;

  const handleTextChange = (event: react.ChangeEvent<HTMLInputElement>) => {
    
    onChange(event.target.value);
  }

  return (
    <div>
      <label htmlFor="door-number-search-bar">Door Number:</label>
      <input id="door-number-search-bar" onChange={handleTextChange}/>
    </div>
  )
}

export default DoorNumberSearchBar;