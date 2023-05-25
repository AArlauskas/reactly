import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { PublicRoutes, PrivateRoutes } from "./builder/constants";
import LoginPage from "./builder/pages/LoginPage/LoginPage";
import HomePage from "./builder/pages/HomePage/HomePage";
import RegisterPage from "./builder/pages/RegisterPage/RegisterPage";
import WebsitesPage from "./builder/pages/WebsitesPage/WebsitesPage";
import BuilderPage from "./builder/pages/BuilderPage/BuilderPage";

const id = window.localStorage.getItem("id");

function App() {
  return (
    <SnackbarProvider autoHideDuration={3000}>
      <Router>{id ? getPrivateRoutes() : getPublicRoutes()}</Router>
    </SnackbarProvider>
  );
}

const getPublicRoutes = () => {
  return (
    <Switch>
      <Route path={PublicRoutes.LOGIN}>
        <LoginPage />
      </Route>
      <Route path={PublicRoutes.REGISTER}>
        <RegisterPage />
      </Route>
      <Route path={PublicRoutes.BUILDER}>
        <BuilderPage />
      </Route>
      <Route path={PublicRoutes.HOME}>
        <HomePage />
      </Route>
      <Route>
        <Redirect to={PublicRoutes.HOME} />
      </Route>
    </Switch>
  );
};

const getPrivateRoutes = () => {
  return (
    <Switch>
      <Route path={PrivateRoutes.WEBSITES}>
        <WebsitesPage />
      </Route>
      <Route path={PublicRoutes.BUILDER}>
        <BuilderPage />
      </Route>
      <Route>
        <Redirect to={PrivateRoutes.WEBSITES} />
      </Route>
    </Switch>
  );
};

export default App;
