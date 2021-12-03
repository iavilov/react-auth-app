import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";
import { Link, useHistory, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles"
import Routes from "./routes/Routes";
import useAuth from "./hooks/useAuth";


const useStyles = makeStyles(() => ({
  root: {}
}));

export default function App() {
  const classes = useStyles();
  const auth = useAuth();
  const history = useHistory();

  const onLogOut = () => {
    auth.logOut();
    history.push("/login");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }}>
            <Typography variant="h6" className={classes.title}>
              Real App
            </Typography>
          </NavLink>
          {auth.isLoaded &&
            (auth.user ? (
              <Box
                flex="1"
                display="flex"
                justifyContent="flex-end"
              >
                <Button color="inherit" component={Link} to="/dashboard">
                  Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/profile">
                  Profile
                </Button>
                <Button color="inherit" onClick={onLogOut}>
                  Log out
                </Button>
              </Box>
            ) : (
              <Box
                flex="1"
                display="flex"
                justifyContent="flex-end"
              >
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/registration">
                  Registration
                </Button>
              </Box>
            ))}
        </Toolbar>
      </AppBar>
      <Routes />
    </>
  );
}