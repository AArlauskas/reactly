import "./paragraph";
import "./topBar";

import ListCategoryContent from "./lists";

const elementsCategoryContent = {
  kind: "category",
  name: "Elements",
  contents: [
    ListCategoryContent,
    {
      kind: "block",
      type: "paragraph",
    },
    {
      kind: "block",
      type: "topBar",
    },
  ],
};

export default elementsCategoryContent;
