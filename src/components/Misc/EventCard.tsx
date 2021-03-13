import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TEvent } from '../../types/events';
import eventTypeToTitleCase from '../../utils/helpers/eventTypeToTitleCase';
import toDateAndLocaleTimeString from '../../utils/helpers/toDateAndLocaleTimeString';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

interface Props {
  event: TEvent;
}

const EventCard: React.FC<Props> = ({ event }) => {
  const { id, name, start_time, description, event_type } = event;
  const date = new Date(start_time);
  const classes = useStyles();
  const history = useHistory();

  return (
    <Paper className={classes.root} elevation={3}>
      <CardActionArea onClick={() => history.push(`/events/${id}`)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.root} color="textSecondary">
            {`${eventTypeToTitleCase(event_type)} — ${toDateAndLocaleTimeString(
              date
            )}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description ?? null}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`/events/${id}`}
          >
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </Paper>
  );
};

export default EventCard;
