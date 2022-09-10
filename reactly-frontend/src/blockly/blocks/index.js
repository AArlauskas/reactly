import "./styles.css";
import elementsCategoryContent from "./elements";
import pagesCategoryContent from "./pages";
import inputsCategoryContent from "./inputs";
import modifierCategoryContent from "./modifiers";
import actionsCategoryContent from "./actions";

const contents = [
  elementsCategoryContent,
  pagesCategoryContent,
  inputsCategoryContent,
  actionsCategoryContent,
  modifierCategoryContent,
];

const compoentsContents = [
  elementsCategoryContent,
  pagesCategoryContent,
  inputsCategoryContent,
];
const functionContents = [actionsCategoryContent];
const stylingContents = modifierCategoryContent.contents;

const mapChildrenContents = (contents) => {
  const result = {};
};

export { compoentsContents, functionContents, stylingContents, contents };
