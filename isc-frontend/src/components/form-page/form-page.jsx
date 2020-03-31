import { makeStyles, Paper } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";

import { ContentWrapper } from "../content-wrapper";
import { Header } from "../header";

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    width: "50%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: spacing(4),
    padding: spacing(3),
    paddingBottom: spacing(5)
  },
  icon: {
    height: 40,
    width: 40,
    float: "right"
  }
}));

export const FormPage = ({ headerTitle, children }) => {
  const classes = useStyles();

  return (
    <ContentWrapper>
      <Header title={headerTitle} />
      <Paper className={classes.paper} elevation={2}>
        <AccountCircle className={classes.icon} />
        {children}
      </Paper>
    </ContentWrapper>
  );
};
