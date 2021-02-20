interface IProps {
  addressData: any;
  onClick: () => void;
}

const AddressListItem = (props: IProps) => {
  const { onClick } = props;
  const { SiteShortAddress } = props.addressData;

  return <button onClick={onClick}>{SiteShortAddress}</button>;
};

export default AddressListItem;
