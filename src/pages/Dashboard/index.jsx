import { Grid, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: 3,
  },
  buttonSpacing: {
    marginLeft: 1,
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
    </Container>
  );
}

export default Dashboard;
