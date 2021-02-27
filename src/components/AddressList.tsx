import React from "react";
import { Address } from "../types";
import AddressListItem from "./AddressListItem";

interface IProps {
  addressList: any[];
  doorNumber: string;
  setUprn: (uprn: string) => void;
  setSeletedAddress: (seletedAddress: Address) => void;
}

const AddressList = (props: IProps) => {
  const { addressList, doorNumber, setUprn, setSeletedAddress } = props;

  return (
    <div>
      {addressList.map((addressData) => {
        if (addressData.SiteShortAddress?.includes(doorNumber)) {
          return (
            <AddressListItem
              addressData={addressData}
              onClick={() => {
                setUprn(addressData.AccountSiteUprn);
                setSeletedAddress(addressData);
              }}
              key={addressData.AccountSiteUprn}
            />
          );
        }
      })}
    </div>
  );
};

export default AddressList;
