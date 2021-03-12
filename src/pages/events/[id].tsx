import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Unauthorized from '../../components/Misc/Unauthorized';
import EventContext from '../../contexts/EventContext';
import UserContext from '../../contexts/UserContext';
import findEvent from '../../utils/helpers/findEvent';
import toDateAndLocaleTimeString from '../../utils/helpers/toDateAndLocaleTimeString';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2, 0),
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },
}));

const EventPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const events = useContext(EventContext);
  const [isLoggedIn] = useContext(UserContext);
  const event = findEvent(events, id);

  if (!event) return null;
  if (event.permission === 'private' && !isLoggedIn) return <Unauthorized />;

  const {
    name,
    description,
    start_time,
    end_time,
    related_events,
    speakers,
  } = event;
  const startDate = new Date(start_time);
  const endDate = new Date(end_time);
  const viewableRelatedEvents = related_events
    .map((event) => findEvent(events, event))
    .filter((event) => event && (event.permission === 'public' || isLoggedIn));

  return (
    <>
      <Typography variant="h3" className={classes.title}>
        {name}
      </Typography>
      <Typography
        gutterBottom
        color="textSecondary"
      >{`${toDateAndLocaleTimeString(startDate)} - ${toDateAndLocaleTimeString(
        endDate
      )} (${Intl.DateTimeFormat().resolvedOptions().timeZone})`}</Typography>
      <Paper className={classes.paper} elevation={3}>
        <Typography
          gutterBottom
          variant="body1"
          color="textPrimary"
          component="p"
        >
          {description ?? null}
        </Typography>
      </Paper>
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant="h6">Speakers: </Typography>}
            secondary={
              <>
                {speakers.map((speaker, index) => (
                  <span key={index}>
                    {speaker.name}
                    {index < speakers.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={<Typography variant="h6">Related Events: </Typography>}
            secondary={
              <>
                {viewableRelatedEvents.map((value, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to={`/events/${value?.id}`}
                  >
                    {value?.name}
                    {index < viewableRelatedEvents.length - 1 ? ', ' : ''}
                  </Link>
                ))}
              </>
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default EventPage;
