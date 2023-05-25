import { Button, CardContent, Container, Grid } from "@mui/material";
import logo from "../../../assets/logo.png";
import { useHistory } from "react-router-dom";
import { PublicRoutes } from "../../constants";

function HomePage() {
  const history = useHistory();

  function onNavigateLogin() {
    history.push(PublicRoutes.LOGIN);
  }

  function onNavigateRegister() {
    history.push(PublicRoutes.REGISTER);
  }

  function onNavigateBuilder() {
    history.push(PublicRoutes.BUILDER);
  }

  return (
    <Container>
      <Grid
        style={{ height: "50vh" }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <CardContent>
          <Grid item xs={12} style={{ textAlign: "center", marginBottom: 20 }}>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="space-around"
            spacing={2}
          >
            <Grid item xs={6}>
              <Button fullWidth onClick={onNavigateLogin} variant="outlined">
                Login
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth onClick={onNavigateRegister} variant="outlined">
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth onClick={onNavigateBuilder} variant="outlined">
                Try out without login
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Container>
  );
}

export default HomePage;
