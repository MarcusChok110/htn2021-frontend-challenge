import { createContext } from 'react';
import { TEndpointResponse } from '../types/events';

/**
 * Context to store list of TEvents returned from API call
 */
const EventContext = createContext<TEndpointResponse>([]);

export default EventContext;
