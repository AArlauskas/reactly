import "./generator.js";
import {
  contents,
  compoentsContents,
  functionContents,
  stylingContents,
} from "./blocks";
import components from "./components";
import functions from "./functions";

const toolbox = {
  key: "0",
  label: "All",
  kind: "categoryToolbox",
  contents,
};

const componentsToolbox = {
  key: "1",
  label: "Components",
  kind: "categoryToolbox",
  contents: compoentsContents,
};

const functionsToolbox = {
  key: "2",
  label: "Functions",
  kind: "categoryToolbox",
  contents: functionContents,
};

const stylingToolbox = {
  key: "3",
  label: "Styling",
  kind: "categoryToolbox",
  contents: stylingContents,
};

const toolboxes = [
  toolbox,
  componentsToolbox,
  functionsToolbox,
  stylingToolbox,
];

export { components, functions };

export default toolboxes;
