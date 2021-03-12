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

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

interface Props {
  id: number;
  name: string;
  start_time: number;
  description?: string;
}

const EventCard: React.FC<Props> = ({ id, name, start_time, description }) => {
  const date = new Date(start_time).toDateString();
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
            {date}
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
