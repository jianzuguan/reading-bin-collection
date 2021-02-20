import React from "react";
import AddressListItem from "./AddressListItem";

interface IProps {
  addressList: any[];
  doorNumber: string;
}

const AddressList = (props: IProps) => {
  const { addressList, doorNumber } = props;

  return (
    <div>
      {addressList.map((addressData) => {
        if (addressData.SiteShortAddress?.includes(doorNumber)) {
          return (
            <AddressListItem
              addressData={addressData}
              key={addressData.AccountSiteUprn}
            />
          );
        }
      })}
    </div>
  );
};

export default AddressList;
