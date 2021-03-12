import {
  Grid,
  InputAdornment,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useContext, useEffect } from 'react';
import EventCard from '../../components/Misc/EventCard';
import useTextField from '../../components/Form/useTextField';
import EventContext from '../../contexts/EventContext';
import UserContext from '../../contexts/UserContext';
import includesLowerCase from '../../utils/helpers/includesLowerCase';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2),
  },
}));

const Home: React.FC = () => {
  const events = useContext(EventContext);
  const [isLoggedIn] = useContext(UserContext);
  const classes = useStyles();
  const [search, searchProps, SearchInput] = useTextField('Search Events');

  // sort by start_time and filter by search input
  const filteredEvents = events
    .sort((a, b) => a.start_time - b.start_time)
    .filter((event) => {
      return includesLowerCase([event.name, event.description], search);
    });

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography className={classes.title} variant="h2">
            Events
          </Typography>
        </Grid>
        <Grid item>
          <SearchInput
            {...searchProps}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid container alignItems="stretch" direction="column">
        {filteredEvents &&
          filteredEvents.map((event) => {
            if (
              (event.permission === 'private' && isLoggedIn) ||
              event.permission === 'public'
            ) {
              const { id, name, description, start_time } = event;
              return (
                <Grid item key={event.id}>
                  <EventCard
                    id={id}
                    name={name}
                    description={description}
                    start_time={start_time}
                  />
                </Grid>
              );
            }
            return null;
          })}
      </Grid>
    </div>
  );
};

export default Home;
