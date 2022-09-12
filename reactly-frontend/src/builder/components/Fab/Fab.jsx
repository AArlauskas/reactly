import { Fab as MuiFab, IconButton } from "@mui/material";

function Fab({ label, FabIcon, onClick }) {
  return (
    <MuiFab
      style={{ marginBottom: 10 }}
      size="small"
      color="primary"
      aria-label={label}
    >
      <IconButton style={{ color: "white" }} onClick={onClick}>
        <FabIcon />
      </IconButton>
    </MuiFab>
  );
}

export default Fab;
