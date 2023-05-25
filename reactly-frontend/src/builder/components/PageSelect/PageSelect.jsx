import { Select, MenuItem } from "@mui/material";

function PageSelect({ currentScreenId, onChange, screens }) {
  return (
    <Select
      variant="standard"
      value={currentScreenId}
      onChange={(e) => onChange(e.target.value)}
      sx={{ minWidth: 150 }}
      className="page-select"
    >
      <MenuItem value="0">Select a screen</MenuItem>
      {screens.map((screen) => (
        <MenuItem key={screen.key} value={screen.key}>
          {screen.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default PageSelect;
