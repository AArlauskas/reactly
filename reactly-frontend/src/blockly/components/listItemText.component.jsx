import {
  ListItemText as MuiListItemText,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
} from "@mui/material";

function ListItemText({ primaryText, secondaryText, modifiers }) {
  return (
    <MuiListItem disablePadding>
      <MuiListItemButton>
        <MuiListItemText
          primary={primaryText}
          secondary={secondaryText}
          style={modifiers}
        />
      </MuiListItemButton>
    </MuiListItem>
  );
}

export default ListItemText;
