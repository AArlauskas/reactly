import "./paragraph";
import "./image";
import "./topBar";
import "./imageList";

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
  ],
};

export default elementsCategoryContent;
