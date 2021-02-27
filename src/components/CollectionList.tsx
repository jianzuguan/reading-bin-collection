import React from "react";
import { Collection } from "../types";
import CollectionListItem from "./CollectionListItem";

interface IProps {
  collectionList: Collection[];
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
