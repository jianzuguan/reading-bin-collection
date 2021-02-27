import { addresses } from "./dummyData";

interface Address {
  AccountSiteId: string;
  AccountSiteUprn: string;
  SiteAddress2: string;
  SiteAddressPrefix: string;
  SiteEasting: string;
  SiteId: string;
  SiteLatitude: string;
  SiteLongitude: string;
  SiteNorthing: string;
  SiteShortAddress: string;
}

interface AddressesResponse {
  Addresses: Address[];
}

const debug = false;

const fetchAddresses = async (postcode: string) => {
  if (debug) {
    return addresses.Addresses;
  }

  const response = await fetch(
    "https://api.reading.gov.uk/rbc/getaddresses/" + postcode
  );
  const data: AddressesResponse = await response.json();

  if ("Addresses" in data && data.Addresses !== null) {
    return data.Addresses;
  }

  return [];
};

export default fetchAddresses;