import { Grid, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: 2,
  },
}));

function NotFound() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            404
          </Typography>
          <Typography variant="h3" align="center" gutterBottom>
            Page not found
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;
