import {
  Button,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { useFormik } from "formik";
import logo from "../../../assets/logo.png";
import validationSchema from "./validationSchema";
import { register } from "../../api/api";
import { PublicRoutes } from "../../constants";

function RegisterPage() {
  const history = useHistory();

  function onGoBackClick() {
    history.push(PublicRoutes.HOME);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      register({ email, password })
        .then(() => {
          enqueueSnackbar({
            message: "Register success",
            variant: "success",
          });
          history.push(PublicRoutes.LOGIN);
        })
        .catch((error) => {
          console.log(error);
          enqueueSnackbar({
            message: error?.response?.data?.message || "Error",
            variant: "error",
          });
        });
    },
  });
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
          <Paper elevation={5}>
            <CardContent>
              <form onSubmit={formik.handleSubmit}>
                <Grid item container xs={12} spacing={2}>
                  <Grid item xs={12}>
                    <Typography align="center" variant="h4">
                      Register
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Password"
                      variant="outlined"
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Repeat Password"
                      variant="outlined"
                      value={formik.values.repeatPassword}
                      onChange={formik.handleChange("repeatPassword")}
                      error={
                        formik.touched.repeatPassword &&
                        Boolean(formik.errors.repeatPassword)
                      }
                      helperText={
                        formik.touched.repeatPassword &&
                        formik.errors.repeatPassword
                      }
                      type="password"
                    />
                  </Grid>
                  <Grid item container xs={12} spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="outlined"
                        onClick={onGoBackClick}
                      >
                        Go Back
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        disabled={!formik.isValid}
                        fullWidth
                        variant="outlined"
                        type="submit"
                      >
                        Register
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Paper>
        </CardContent>
      </Grid>
    </Container>
  );
}

export default RegisterPage;
