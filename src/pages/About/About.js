import React from "react";
import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const builtWith = [
  { name: "@material-ui/core", varsion: "^4.3.3" },
  { name: "@material-ui/icons", varsion: "^4.2.1" },
  { name: "@material-ui/styles", varsion: "^4.3.3" },
  { name: "clsx", varsion: "^1.0.4" },
  { name: "react", varsion: "^16.9.0" },
  { name: "react-dom", varsion: "^16.9.0" },
  { name: "react-redux", varsion: "^7.1.1" },
  { name: "react-router-dom", varsion: "^5.0.1" },
  { name: "react-router-transition", varsion: "^1.3.0" },
  { name: "react-scripts", varsion: "3.1.1" },
  { name: "react-window", varsion: "^1.8.5" },
  { name: "redux", varsion: "^4.0.4" },
  { name: "redux-observable", varsion: "^1.1.0" },
  { name: "rxjs", varsion: "^6.5.2" }
];

const About = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Built with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        ️ using:
      </Typography>
      <div className={classes.listContainer}>
        {builtWith.map(({ name }) => (
          <Typography key={name} variant="body1">
            {name}
          </Typography>
        ))}
      </div>
    </Paper>
  );
};

export default About;
