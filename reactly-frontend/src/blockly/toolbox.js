import "./generator.js";
import contents from "./blocks";
import components from "./components";
import functions from "./functions";

const toolbox = {
  kind: "categoryToolbox",
  contents,
};

export { components, functions };

export default toolbox;
