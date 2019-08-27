import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  CircularProgress
} from "@material-ui/core";

import SearchBar from "components/SearchBar";
import useStyles from "./styles";

const Home = props => {
  const classes = useStyles();

  return (
    <>
      <SearchBar
        inputProps={{
          placeholder: "Search PokeApi"
        }}
        iconProps={{
          onClick: props.onSearchClick
        }}
      />
      <Paper className={classes.root}>
        {props.loading ? (
          <div className={classes.loadingContainer}>
            <CircularProgress disableShrink />
          </div>
        ) : (
          <List className={classes.list}>
            {props.list.map(item => (
              <ListItem key={item.name} button>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </>
  );
};

export default Home;
