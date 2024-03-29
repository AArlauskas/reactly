import { Select, MenuItem } from "@mui/material";

function ToolBoxSelect({
  toolboxOptions,
  onToolboxOptionChange,
  selectedToolboxId,
}) {
  return (
    <Select
      variant="standard"
      onChange={(e) => onToolboxOptionChange(e.target.value)}
      value={selectedToolboxId}
      sx={{ minWidth: 150 }}
      label="Toolbox" 
      className="toolbox-select"
    >
      {toolboxOptions.map((option) => (
        <MenuItem key={option.key} value={option.key}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default ToolBoxSelect;
