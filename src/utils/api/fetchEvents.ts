import { TEndpointResponse } from '../../types/events';

// url to fetch events from
export const eventsURL =
  'https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }';

/**
 * Fetches events from an endpoint and returns the array of data
 */
async function fetchEvents(): Promise<TEndpointResponse> {
  const response = await fetch(eventsURL);
  const json = await response.json();
  return json.data.events;
}

export default fetchEvents;
