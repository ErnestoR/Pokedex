import React from "react";
import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const builtWith = [
  {
    name: "React"
  },
  {
    name: "Material-UI"
  }
];

const About = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Built with <span role="img">❤️</span>️ using:
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
