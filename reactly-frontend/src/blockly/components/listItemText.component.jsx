import { ListItemText as MuiListItemText } from "@mui/material";

function ListItemText({ primaryText, secondaryText }) {
  return <MuiListItemText primary={primaryText} secondary={secondaryText} />;
}

export default ListItemText;
