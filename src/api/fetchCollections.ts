import { collections } from "./dummyData";
import {Collection} from '../types';

interface CollectionsResponse {
  Collections: Collection[];
}

const debug = false;

// uprn: Unique Property Reference Number
const fetchCollections = async (uprn: string) => {
  if (debug) {
    return collections.Collections;
  }

  const response = await fetch(
    "https://api.reading.gov.uk/rbc/mycollections/" + uprn
  );
  const data: CollectionsResponse = await response.json();

  if ("Collections" in data && data.Collections !== null) {
    return data.Collections;
  }

  return [];
};

export default fetchCollections;
