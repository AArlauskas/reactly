import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  createTheme,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { SketchPicker } from "react-color";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const handleThemeChange = (
  darkMode,
  primaryColor,
  secondaryColor,
  onThemeChange
) => {
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
  });
  onThemeChange(theme);
};

function ThemeCustomizer({ onThemeChange, isOpen, onClose }) {
  const [darkMode, setDarkMode] = React.useState(false);
  const [primaryColor, setPrimaryColor] = React.useState("#3f51b5");
  const [secondaryColor, setSecondaryColor] = React.useState("#f50057");

  const handleDarkModeChange = (event) => setDarkMode(event.target.checked);

  useEffect(() => {
    handleThemeChange(darkMode, primaryColor, secondaryColor, onThemeChange);
  }, [darkMode, primaryColor, secondaryColor, onThemeChange]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <List>
            <ListItem>
              <ListItemText>Dark mode</ListItemText>
              <ListItemSecondaryAction>
                <Switch
                  value={darkMode}
                  onChange={() =>
                    handleDarkModeChange(
                      darkMode,
                      primaryColor,
                      secondaryColor,
                      onThemeChange
                    )
                  }
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography textAlign="center" variant="h6">
                Primary color
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="center" variant="h6">
                Secondary color
              </Typography>
            </Grid>
            <Grid item container xs={12} justifyContent="space-around">
              <Grid item>
                <SketchPicker
                  color={primaryColor}
                  onChange={(color) => setPrimaryColor(color.hex)}
                />
              </Grid>
              <Grid item>
                <SketchPicker
                  color={secondaryColor}
                  onChange={(color) => setSecondaryColor(color.hex)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ThemeCustomizer;
