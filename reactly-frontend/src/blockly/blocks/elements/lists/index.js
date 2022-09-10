import "./list";
import "./listItemText";
import "./divider";

const listCategoryContent = {
  kind: "category",
  name: "Lists",
  colour: "300",
  contents: [
    {
      kind: "block",
      type: "list",
    },
    {
      kind: "block",
      type: "listItemText",
    },
    {
      kind: "block",
      type: "divider",
    },
  ],
};

export default listCategoryContent;
