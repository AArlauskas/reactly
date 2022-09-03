import "./image";
import "./topBar";
import "./imageList";
import "./typography";

import ListCategoryContent from "./lists";

const elementsCategoryContent = {
  kind: "category",
  name: "Elements",
  contents: [
    ListCategoryContent,
    {
      kind: "block",
      type: "image",
    },
    {
      kind: "block",
      type: "imageList",
    },
    {
      kind: "block",
      type: "topBar",
    },
    {
      kind: "block",
      type: "typography",
    },
  ],
};

export default elementsCategoryContent;
