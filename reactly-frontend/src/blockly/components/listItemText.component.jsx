import {
  ListItemText as MuiListItemText,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
} from "@mui/material";

function ListItemText({ primaryText, secondaryText }) {
  return (
    <MuiListItem disablePadding>
      <MuiListItemButton>
        <MuiListItemText primary={primaryText} secondary={secondaryText} />
      </MuiListItemButton>
    </MuiListItem>
  );
}

export default ListItemText;
