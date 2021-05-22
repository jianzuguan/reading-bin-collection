import React from 'react';
import { ListItem } from '@material-ui/core';

interface IProps {
  addressData: any;
  onClick: () => void;
}

const AddressListItem = (props: IProps) => {
  const { onClick } = props;
  const { SiteShortAddress } = props.addressData;

  return (
    <ListItem button onClick={onClick}>
      {SiteShortAddress}
    </ListItem>
  );
};

export default AddressListItem;
