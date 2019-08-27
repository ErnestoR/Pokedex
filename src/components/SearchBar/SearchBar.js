import React from "react";
import { Divider, InputBase, IconButton, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const SearchBar = props => {
  const classes = useStyles();
  const { inputProps, iconProps } = props;

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        inputProps={{ "aria-label": "search google maps" }}
        {...inputProps}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton {...iconProps}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
