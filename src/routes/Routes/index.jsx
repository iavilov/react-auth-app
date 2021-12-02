import { CircularProgress, Container, Grid } from "@mui/material";
import { Switch, Route, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { makeStyles } from "@mui/styles";

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";
import Dashboard from "../../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";

const useStyles = makeStyles(() => ({
  root: {},
}));

function Routes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>

      <GuestRoute path="/login">
        <Login />
      </GuestRoute>
      <GuestRoute path="/registration">
        <Registration />
      </GuestRoute>

      <Route path="/not-found-404">
        <NotFound />
      </Route>
      <Redirect to="/not-found-404" />
    </Switch>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Routes;
