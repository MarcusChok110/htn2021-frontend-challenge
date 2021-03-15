import React, { useEffect, useReducer, useState } from 'react';
import fetchEvents from './utils/api/fetchEvents';
import EventContext from './contexts/EventContext';
import Routes from './routes';
import { TEndpointResponse } from './types/events';
import 'fontsource-roboto';
import userReducer from './utils/reducers/userReducer';
import UserContext from './contexts/UserContext';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

const App: React.FC = () => {
  // initialize states for contexts
  const [events, setEvents] = useState<TEndpointResponse>([]);
  const [isLoggedIn, dispatch] = useReducer(userReducer, false);

  // fetch events on mount
  useEffect(() => {
    fetchEvents().then((response) => setEvents(response));
  }, []);

  return (
    <EventContext.Provider value={events}>
      <UserContext.Provider value={[isLoggedIn, dispatch]}>
        <CssBaseline />
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
