import "./image";
import "./topBar";
import "./imageList";
import "./typography";
import "./break";
import "./button";
import "./div";
import "./flex";

import ListCategoryContent from "./lists";
import LinksCategoryContent from "./links";

const elementsCategoryContent = {
  kind: "category",
  name: "Elements",
  colour: "200",
  contents: [
    ListCategoryContent,
    LinksCategoryContent,
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
    {
      kind: "block",
      type: "break",
    },
    {
      kind: "block",
      type: "button",
    },
    {
      kind: "block",
      type: "div",
    },
    {
      kind: "block",
      type: "flex",
    },
  ],
};

export default elementsCategoryContent;
