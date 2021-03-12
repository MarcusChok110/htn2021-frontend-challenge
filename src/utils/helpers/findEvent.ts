import { TEndpointResponse } from '../../types/events';

export default function findEvent(
  events: TEndpointResponse,
  id: number | string
) {
  return events.filter((event) => event.id === Number(id))[0];
}
