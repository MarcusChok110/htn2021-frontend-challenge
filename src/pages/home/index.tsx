import {
  Grid,
  InputAdornment,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useContext } from 'react';
import EventCard from '../../components/Misc/EventCard';
import useTextField from '../../components/Form/useTextField';
import EventContext from '../../contexts/EventContext';
import UserContext from '../../contexts/UserContext';
import includesLowerCase from '../../utils/helpers/includesLowerCase';
import useSelect from '../../components/Form/useSelect';
import { eventTitles } from '../../utils/helpers/eventTypeToTitleCase';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2, 0, 0),
  },
}));

// array of options for the select input to choose from
const filterOptions = [{ value: 'none', label: 'None' }, ...eventTitles];

const Home: React.FC = () => {
  const events = useContext(EventContext);
  const [isLoggedIn] = useContext(UserContext);
  const classes = useStyles();

  // search bar
  const [search, searchProps, SearchInput] = useTextField('Search Events');
  // select input
  const [filter, filterProps, FilterSelect] = useSelect(
    'Filter Events',
    'filter-select',
    filterOptions,
    'none'
  );

  // sort by start_time and filter by search input
  const filteredEvents = events
    .sort((a, b) => a.start_time - b.start_time)
    .filter((event) => {
      return includesLowerCase([event.name, event.description], search);
    })
    .filter((event) => {
      return filter === 'none' || event.event_type === filter;
    });

  return (
    <div>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={12}>
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
        <Grid item>
          <FilterSelect {...filterProps} />
        </Grid>
      </Grid>
      <Grid container alignItems="stretch" direction="column">
        {filteredEvents &&
          filteredEvents.map((event) => {
            if (
              (event.permission === 'private' && isLoggedIn) ||
              event.permission === 'public'
            ) {
              return (
                <Grid item key={event.id}>
                  <EventCard event={event} />
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
