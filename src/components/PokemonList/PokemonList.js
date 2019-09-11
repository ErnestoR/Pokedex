import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { FixedSizeList } from "react-window";
import { Link } from "react-router-dom";

import useStyles from "./styles";

export function Row(props) {
  const { index, data, style } = props;

  return (
    <ListItem
      button
      style={style}
      key={index}
      divider
      component={Link}
      to={`/pokemon/${data[index].name}`}
    >
      <ListItemText primary={data[index].name} />
    </ListItem>
  );
}

const Home = props => {
  const classes = useStyles();
  const { data } = props;

  return (
    <FixedSizeList
      height={400}
      itemSize={46}
      itemCount={data.length}
      className={classes.list}
      itemData={data}
    >
      {Row}
    </FixedSizeList>
  );
};

export default Home;
