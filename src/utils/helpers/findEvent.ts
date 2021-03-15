import { TEndpointResponse } from '../../types/events';

/**
 * Finds a TEvent in an array of TEvents from its id
 * @param events Array of TEvents to be searched
 * @param id id of event to be found
 */
export default function findEvent(
  events: TEndpointResponse,
  id: number | string
) {
  return events.filter((event) => event.id === Number(id))[0];
}
