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
        Abilities
      </Typography>
      <List>
        {data.abilities.map(({ ability }) => (
          <ListItem key={ability.name} button divider>
            <ListItemText primary={ability.name} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

AbilitiesList.defaultProps = {
  data: {
    abilities: []
  }
};

export default AbilitiesList;
