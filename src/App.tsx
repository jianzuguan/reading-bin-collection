import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import PostcodeSearchBar from './components/PostcodeSearchBar';
import DoorNumberSearchBar from './components/DoorNumberSearchBar';
import AddressList from './components/AddressList';
import fetchAddresses from './api/fetchAddresses';
import { isPostcodeValid } from './utils';
import CollectionList from './components/CollectionList';
import fetchCollections from './api/fetchCollections';
import { Address, Collection } from './types';

function App() {
  const [postcode, setPostcode] = useState<string>('');
  const [doorNumber, setDoorNumber] = useState<string>('');
  const [uprn, setUprn] = useState<string>();
  const [selectedAddress, setSelectedAddress] = useState<Address>();
  const [addressList, setAddressList] = useState<Address[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    setPostcode(localStorage.getItem('postcode') || '');
    setDoorNumber(localStorage.getItem('doorNumber') || '');
  }, []);

  // Remember for next visit.
  useEffect(() => {
    localStorage.setItem('postcode', postcode);
  }, [postcode]);

  useEffect(() => {
    localStorage.setItem('doorNumber', doorNumber);
  }, [doorNumber]);

  // Fetching data.
  useEffect(() => {
    const getAddresses = async () => {
      const addressesResult = await fetchAddresses(postcode);

      setAddressList(addressesResult);
    };

    setUprn(undefined);
    setSelectedAddress(undefined);
    setAddressList([]);
    setCollections([]);
    if (isPostcodeValid(postcode)) {
      getAddresses();
    }

    return () => {};
  }, [postcode]);

  useEffect(() => {
    setCollections([]);
  }, [doorNumber]);

  useEffect(() => {
    if (uprn === undefined) {
      return;
    }

    const getCollections = async () => {
      const collectionResult = await fetchCollections(uprn);

      setCollections(collectionResult);
    };

    setCollections([]);
    getCollections();
  }, [uprn]);

  return (
    <Container className="py4">
      <PostcodeSearchBar value={postcode} onChange={setPostcode} />
      <DoorNumberSearchBar value={doorNumber} onChange={setDoorNumber} />
      {selectedAddress && (
        <p>
          <b>Address: </b>
          {selectedAddress.SiteShortAddress}
        </p>
      )}
      {!selectedAddress && collections.length === 0 ? (
        <AddressList
          addressList={addressList}
          doorNumber={doorNumber}
          setUprn={setUprn}
          setSelectedAddress={setSelectedAddress}
        />
      ) : (
        <CollectionList collectionList={collections} />
      )}
    </Container>
  );
}

export default App;
