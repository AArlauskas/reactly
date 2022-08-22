import { List as MuiList, ListItem as MuiListItem } from "@mui/material";
import { Children } from "react";

function List({ children }) {
  function mapListItems() {
    console.log(children);
    const childrenArray = Children.toArray(children);
    childrenArray.map((item, index) => {
      return (
        <MuiListItem disablePadding key={index}>
          {item}
        </MuiListItem>
      );
    });
  }

  return <MuiList>{children}</MuiList>;
}

export default List;
