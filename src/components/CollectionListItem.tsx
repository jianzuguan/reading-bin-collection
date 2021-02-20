import React from "react";

interface IProps {
  collectionData: any;
}

const AddressListItem = (props: IProps) => {
  const { Service, Date } = props.collectionData;

  return (
    <div>
      <p>{Service}</p>
      <p>{Date}</p>
    </div>
  );
};

export default AddressListItem;
