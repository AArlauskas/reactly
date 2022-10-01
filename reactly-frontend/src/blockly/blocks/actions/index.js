import "./showAlert";
import "./navigateInside";
import "./navigateOutside";

const actionsCategoryContent = {
  kind: "category",
  name: "Actions",
  colour: "100",
  contents: [
    {
      kind: "block",
      type: "showAlert",
    },
    {
      kind: "block",
      type: "navigateInside",
    },
    {
      kind: "block",
      type: "navigateOutside",
    },
  ],
};

export default actionsCategoryContent;
