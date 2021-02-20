interface IProps {
  addressData: any;
}

const AddressListItem = (props: IProps) => {
  const { SiteShortAddress } = props.addressData;

  const onClick = () => {
    console.log('hello');
  }

  return <button onClick={onClick}>{SiteShortAddress}</button>;
};

export default AddressListItem;
