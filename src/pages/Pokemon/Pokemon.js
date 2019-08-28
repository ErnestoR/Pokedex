import React from "react";
import {
  Card,
  // CardHeader,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography
} from "@material-ui/core";
import capitalize from "lodash/capitalize";
import useStyles from "./styles";

import data from "./data.json";

const Pokemon = props => {
  const classes = useStyles();

  const stats = data.stats;
  const pokemonName = capitalize(data.name);

  console.log({ data });

  return (
    <>
      <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
          {pokemonName}
        </Typography>
        <Grid container spacing={3} className={classes.stats}>
          <Grid item xs={12} container direction="column" alignItems="center">
            <CardMedia
              className={classes.media}
              image={data.sprites.front_default}
              title={pokemonName}
            />
          </Grid>

          <Grid item xs={3} container direction="column" alignItems="center">
            <Typography variant="h4">{stats[4].base_stat}</Typography>
            <Typography variant="h6">Attack</Typography>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems="center">
            <Typography variant="h4">{stats[3].base_stat}</Typography>
            <Typography variant="h6">Defence</Typography>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems="center">
            <Typography variant="h4">{stats[5].base_stat}</Typography>
            <Typography variant="h6">HP</Typography>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems="center">
            <Typography variant="h4">{stats[0].base_stat}</Typography>
            <Typography variant="h6">Speed</Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <Typography variant="h4">{stats[2].base_stat}</Typography>
            <Typography variant="h6">Special Attack</Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <Typography variant="h4">{stats[1].base_stat}</Typography>
            <Typography variant="h6">Special Defence</Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <Typography variant="h4">{data.weight}</Typography>
            <Typography variant="h6">Weight</Typography>
          </Grid>
        </Grid>
      </Card>

      <Card className={classes.list}>
        <List subheader={<ListSubheader>Abilities</ListSubheader>}>
          {data.abilities.map(({ ability }) => (
            <ListItem key={ability.name} button>
              <ListItemText primary={ability.name} />
            </ListItem>
          ))}
        </List>
      </Card>

      <Card className={classes.list}>
        <List subheader={<ListSubheader>Moves</ListSubheader>}>
          {data.moves.map(({ move, version_group_details }) => (
            <ListItem key={move.name} button>
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

export default Pokemon;
