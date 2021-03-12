import { createContext } from 'react';
import { TEndpointResponse } from '../types/events';

const EventContext = createContext<TEndpointResponse>([]);

export default EventContext;
