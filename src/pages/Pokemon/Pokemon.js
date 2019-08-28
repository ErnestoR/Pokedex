import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import PokemonDetails from "components/Details";
import useStyles from "./styles";

const Pokemon = props => {
  const classes = useStyles();
  const { data, loading } = props;

  if (loading || !data) {
    return <div>loading</div>;
  }

  return (
    <>
      <PokemonDetails data={data} />
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
    </>
  );
};

Pokemon.defaultProps = {
  // data: {
  //   stats: {}
  // }
};

export default Pokemon;
