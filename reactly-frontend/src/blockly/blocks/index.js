import "./styles.css";
import elementsCategoryContent from "./elements";
import pagesCategoryContent from "./pages";
import inputsCategoryContent from "./inputs";
import modifierCategoryContent from "./modifiers";
import actionsCategoryContent from "./actions";
import customCategoryContent from "./custom";

const contents = [
  elementsCategoryContent,
  pagesCategoryContent,
  inputsCategoryContent,
  actionsCategoryContent,
  modifierCategoryContent,
  customCategoryContent,
];

const compoentsContents = [
  elementsCategoryContent,
  pagesCategoryContent,
  inputsCategoryContent,
];
const functionContents = [actionsCategoryContent];
const stylingContents = modifierCategoryContent.contents;

export { compoentsContents, functionContents, stylingContents, contents };
