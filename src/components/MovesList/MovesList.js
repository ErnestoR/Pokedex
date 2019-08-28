import React from "react";
import useStyles from "./styles";
import {
  Card,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

const AbilitiesList = props => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Card className={classes.listContainer}>
      <Typography variant="h6" color="textSecondary">
        Moves
      </Typography>
      <List className={classes.list}>
        {data.moves.map(({ move, version_group_details }) => (
          <ListItem key={move.name} button divider>
            <ListItemText
              primary={move.name}
              secondary={version_group_details[0].move_learn_method.name}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default AbilitiesList;
