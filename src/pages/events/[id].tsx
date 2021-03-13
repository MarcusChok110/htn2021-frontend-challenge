import {
  Avatar,
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
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
import eventTypeToTitleCase from '../../utils/helpers/eventTypeToTitleCase';
import { Event, Help, RecordVoiceOver } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2, 0),
  },
  bgSecondary: {
    backgroundColor: theme.palette.secondary.main + '80',
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
    event_type,
    public_url,
    private_url,
  } = event;
  const startDate = new Date(start_time);
  const endDate = new Date(end_time);
  // filter out undefined events and private events if not logged in
  const viewableRelatedEvents = related_events
    .map((event) => findEvent(events, event))
    .filter((event) => event && (event.permission === 'public' || isLoggedIn));

  return (
    <>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h3" className={classes.title}>
          {name}
        </Typography>
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        marginBottom={2}
      >
        <Typography
          gutterBottom
          color="textSecondary"
        >{`${toDateAndLocaleTimeString(
          startDate
        )} - ${toDateAndLocaleTimeString(endDate)} (${
          Intl.DateTimeFormat().resolvedOptions().timeZone
        })`}</Typography>
      </Box>
      <Paper elevation={3}>
        <Typography
          gutterBottom
          variant="body1"
          color="textPrimary"
          component="p"
        >
          <List>
            {description && (
              <>
                <ListItem>
                  <ListItemText>{description}</ListItemText>
                </ListItem>
                <Divider />
              </>
            )}
            {public_url && (
              <ListItem>
                <ListItemText>
                  Learn More: <Link href={public_url}>{public_url}</Link>
                </ListItemText>
              </ListItem>
            )}
            {isLoggedIn && (
              <ListItem>
                <ListItemText>
                  Super Secret Hacker Link:{' '}
                  <Link href={private_url}>{private_url}</Link>
                </ListItemText>
              </ListItem>
            )}
          </List>
        </Typography>
      </Paper>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.bgSecondary}>
              <Help />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h6">Event Type</Typography>}
            secondary={eventTypeToTitleCase(event_type)}
          />
        </ListItem>
        {speakers.length > 0 && (
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.bgSecondary}>
                <RecordVoiceOver />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="h6">Speakers</Typography>}
              secondary={speakers.map((speaker, index) => (
                <span key={index}>
                  {speaker.name}
                  {index < speakers.length - 1 ? ', ' : ''}
                </span>
              ))}
            />
          </ListItem>
        )}
        {viewableRelatedEvents.length > 0 && (
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.bgSecondary}>
                <Event />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="h6">Related Events</Typography>}
              secondary={viewableRelatedEvents.map((value, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={`/events/${value?.id}`}
                >
                  {value?.name}
                  {index < viewableRelatedEvents.length - 1 ? ', ' : ''}
                </Link>
              ))}
            />
          </ListItem>
        )}
      </List>
    </>
  );
};

export default EventPage;
