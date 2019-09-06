import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";
import capitalize from "lodash/capitalize";

const Details = props => {
  const classes = useStyles();
  const { data, species } = props;
  const stats = data.stats;
  const pokemonName = capitalize(data.name);

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
            <CardContent>
              <Typography variant="body1" color="textSecondary">
                {species.flavor_text_entries[1].flavor_text}
              </Typography>
            </CardContent>
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
    </>
  );
};

export default Details;
