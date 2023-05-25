import { Fab as MuiFab } from "@mui/material";

function Fab({ label, FabIcon, onClick, className }) {
  return (
    <MuiFab
      className={className}
      style={{ marginBottom: 10, marginRight: 10 }}
      size="small"
      color="primary"
      aria-label={label}
      onClick={onClick}
    >
      <FabIcon />
    </MuiFab>
  );
}

export default Fab;
