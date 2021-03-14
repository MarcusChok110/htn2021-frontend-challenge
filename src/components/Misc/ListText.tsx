import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bgSecondary: {
    backgroundColor: theme.palette.secondary.main + '80',
  },
}));

interface Props {
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  avatar?: React.ReactNode;
}

const ListText: React.FC<Props> = ({ primary, secondary, avatar }) => {
  const classes = useStyles();

  return (
    <ListItem>
      {avatar && (
        <ListItemAvatar>
          <Avatar className={classes.bgSecondary}>{avatar}</Avatar>
        </ListItemAvatar>
      )}
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );
};

export default ListText;
