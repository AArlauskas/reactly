import "./showAlert";
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
      type: "navigateOutside",
    },
  ],
};

export default actionsCategoryContent;
