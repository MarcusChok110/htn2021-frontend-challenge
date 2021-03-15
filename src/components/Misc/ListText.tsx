import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // light pink / red background for avatar icons
  bgSecondary: {
    backgroundColor: theme.palette.secondary.main + '80',
  },
}));

// the most common list item props
interface Props {
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  avatar?: React.ReactNode;
}

/**
 * Common Material-UI list item components used together in event page
 * @param primary Primary text to be displayed
 * @param secondary Secondary, less focussed text
 * @param avatar Icon to be displayed next to list item
 * @constructor
 */
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
