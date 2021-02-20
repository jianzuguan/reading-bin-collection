import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PostcodeSearchBar from './components/PostcodeSearchBar';
import DoorNumberSearchBar from './components/DoorNumberSearchBar';
import AddressList from './components/AddressList';
import fetchAddresses from './api/getAddresses';
import {isPostcodeValid} from './utils'

function App() {
  const [postcode, setPostcode] = useState<string>('');
  const [doorNumber, setDoorNumber] = useState<string>('');
  const [addressList, setAddressList] = useState<any[]>([]);

  useEffect( () => {
    const fetchAddressData = async () => {
      const addressesResult = await fetchAddresses(postcode);
      
      setAddressList(addressesResult.Addresses);
    }

    if (isPostcodeValid(postcode)) {
      fetchAddressData();
    }
    
    return () => {
    }
  }, [postcode]);

  return (
    <div className="App">
      <PostcodeSearchBar onChange={setPostcode} />
      <DoorNumberSearchBar onChange={setDoorNumber} />
    
      <AddressList addressList={addressList} doorNumber={doorNumber}/>
    </div>
  );
}

export default App;
