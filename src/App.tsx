import React, { useEffect, useReducer, useState } from 'react';
import fetchEvents from './api/fetchEvents';
import EventContext from './contexts/EventContext';
import Routes from './routes';
import { TEndpointResponse } from './types/events';
import 'fontsource-roboto';
import userReducer from './utils/reducers/userReducer';
import UserContext from './contexts/UserContext';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const [events, setEvents] = useState<TEndpointResponse>([]);
  const [isLoggedIn, dispatch] = useReducer(userReducer, false);

  useEffect(() => {
    fetchEvents().then((response) => setEvents(response));
  }, []);

  return (
    <EventContext.Provider value={events}>
      <UserContext.Provider value={[isLoggedIn, dispatch]}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </UserContext.Provider>
    </EventContext.Provider>
  );
};

export default App;
