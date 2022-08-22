import { AppBar, Box, Toolbar } from "@mui/material";

function TopBar({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
