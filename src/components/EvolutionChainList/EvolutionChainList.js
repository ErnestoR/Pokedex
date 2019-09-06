import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import capitalize from "lodash/capitalize";
import {
  Card,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography
} from "@material-ui/core";

function getEvolvesToFromChain(chain, name) {
  // no evolution
  if (!chain.evolves_to) {
    return [];
  }

  // 1st level
  if (chain.species.name === name) {
    return chain.evolves_to;
  }

  // 2nd level
  const secondLevel = chain.evolves_to[0];
  if (secondLevel.species.name === name) {
    return secondLevel.evolves_to;
  }

  // 3rd level will always be empty
  return [];
}

const EvolutionChainList = props => {
  const classes = useStyles();
  const { evolutionChain, species } = props;
  const { chain = {} } = evolutionChain;
  const pokemonName = species.name;
  const evolvesTo = getEvolvesToFromChain(chain, pokemonName);

  // No evolution tree
  if (!species.evolves_from_species && evolvesTo.length === 0) {
    return null;
  }

  return (
    <Card className={classes.listContainer}>
      <Typography variant="h6" color="textSecondary">
        Evolutions
      </Typography>
      {species.evolves_from_species && (
        <List subheader={<ListSubheader>Evolves from</ListSubheader>}>
          <ListItem
            button
            divider
            component={Link}
            to={`/pokemon/${species.evolves_from_species.name}`}
          >
            <ListItemText
              primary={capitalize(species.evolves_from_species.name)}
            />
          </ListItem>
        </List>
      )}
      {evolvesTo.length > 0 && (
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Evolves to
            </ListSubheader>
          }
        >
          {evolvesTo.map((evolution, index) => (
            <ListItem
              key={`evolution-${index}`}
              button
              divider
              component={Link}
              to={`/pokemon/${evolution.species.name}`}
            >
              <ListItemText primary={capitalize(evolution.species.name)} />
            </ListItem>
          ))}
        </List>
      )}
    </Card>
  );
};

EvolutionChainList.defaultProps = {
  evolutionChain: {}
};

export default EvolutionChainList;
