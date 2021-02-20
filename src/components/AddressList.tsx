import React from "react";
import AddressListItem from "./AddressListItem";

interface IProps {
  addressList: any[];
  doorNumber: string;
  setUprn: (uprn: string) => void;
}

const AddressList = (props: IProps) => {
  const { addressList, doorNumber, setUprn } = props;

  return (
    <div>
      {addressList.map((addressData) => {
        if (addressData.SiteShortAddress?.includes(doorNumber)) {
          return (
            <AddressListItem
              addressData={addressData}
              onClick={() => {
                setUprn(addressData.AccountSiteUprn);
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
