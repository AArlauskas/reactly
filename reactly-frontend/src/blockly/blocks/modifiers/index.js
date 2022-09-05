import colorsCategoryContent from "./colors";
import dimensionsCategoryContent from "./dimensions";
import marginsCategoryContent from "./margins";
import paddingsCategoryContent from "./padding";

const modifierCategoryContent = {
  kind: "category",
  name: "Modifiers",
  contents: [
    paddingsCategoryContent,
    marginsCategoryContent,
    dimensionsCategoryContent,
    colorsCategoryContent,
  ],
};

export default modifierCategoryContent;
