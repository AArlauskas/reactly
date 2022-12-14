import alignmentCategoryContent from "./alignment";
import colorsCategoryContent from "./colors";
import dimensionsCategoryContent from "./dimensions";
import marginsCategoryContent from "./margins";
import paddingsCategoryContent from "./padding";

const modifierCategoryContent = {
  kind: "category",
  name: "Modifiers",
  colour: "800",
  contents: [
    paddingsCategoryContent,
    marginsCategoryContent,
    dimensionsCategoryContent,
    colorsCategoryContent,
    alignmentCategoryContent,
  ],
};

export default modifierCategoryContent;
