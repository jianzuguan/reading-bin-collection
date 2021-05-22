import React from "react";
import { List } from "@material-ui/core";
import { Address } from "../types";
import AddressListItem from "./AddressListItem";

interface IProps {
  addressList: any[];
  doorNumber: string;
  setUprn: (uprn: string) => void;
  setSelectedAddress: (selectedAddress: Address) => void;
}

const AddressList = (props: IProps) => {
  const { addressList, doorNumber, setUprn, setSelectedAddress } = props;

  return (
    <List>
      {addressList.map((addressData) => {
        if (addressData.SiteShortAddress?.includes(doorNumber)) {
          return (
            <AddressListItem
              addressData={addressData}
              onClick={() => {
                setUprn(addressData.AccountSiteUprn);
                setSelectedAddress(addressData);
              }}
              key={addressData.AccountSiteUprn}
            />
          );
        }
        return '';
      })}
    </List>
  );
};

export default AddressList;
