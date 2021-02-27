import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostcodeSearchBar from "./components/PostcodeSearchBar";
import DoorNumberSearchBar from "./components/DoorNumberSearchBar";
import AddressList from "./components/AddressList";
import fetchAddresses from "./api/fetchAddresses";
import { isPostcodeValid } from "./utils";
import CollectionList from "./components/CollectionList";
import fetchCollections from "./api/fetchCollections";

function App() {
  const [postcode, setPostcode] = useState<string>("");
  const [doorNumber, setDoorNumber] = useState<string>("");
  const [uprn, setUprn] = useState<string>();
  const [addressList, setAddressList] = useState<any[]>([]);
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    const getAddresses = async () => {
      const addressesResult = await fetchAddresses(postcode);

      setAddressList(addressesResult);
    };

    setDoorNumber('');
    setUprn(undefined);
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
    <div className="App">
      <PostcodeSearchBar onChange={setPostcode} />
      <DoorNumberSearchBar onChange={setDoorNumber} />

      {collections.length === 0 ? (
        <AddressList
          addressList={addressList}
          doorNumber={doorNumber}
          setUprn={setUprn}
        />
      ) : (
        <CollectionList collectionList={collections} />
      )}
    </div>
  );
}

export default App;
