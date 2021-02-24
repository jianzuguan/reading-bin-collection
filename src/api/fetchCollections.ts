import { collections } from "./dummyData";
interface Collection {
  Date: string;
  Day: string;
  Service: string;
}

interface CollectionsResponse {
  Collections: Collection[];
}

const debug = true;

// uprn: Unique Property Reference Number
const fetchCollections = async (uprn: string) => {
  if (debug) {
    return collections.Collections;
  }

  const response = await fetch(
    "https://api.reading.gov.uk/rbc/mycollections/" + uprn
  );
  const data: CollectionsResponse = await response.json();

  if ("Collections" in data) {
    return data.Collections;
  }

  return [];
};

export default fetchCollections;
