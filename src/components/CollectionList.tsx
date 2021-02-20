import React from "react";
import AddressListItem from "./AddressListItem";
import CollectionListItem from "./CollectionListItem";

interface IProps {
  collectionList: any[];
}

const CollectionList = (props: IProps) => {
  const { collectionList } = props;

  return (
    <div>
      {collectionList.map((collectionData, index) => {
        return (
          <CollectionListItem
            collectionData={collectionData}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CollectionList;
