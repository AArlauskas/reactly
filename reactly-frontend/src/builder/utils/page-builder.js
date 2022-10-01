const IMPORTS = [
  "import TopBar from '../components/topBar.component'",
  "import List from '../components/list.component'",
  "import ListItemText from '../components/listItemText.component'",
  "import Divider from '../components/listDivider.component'",
  "import ImageList from '../components/imageList.component'",
  "import Typography from '../components/typography.component'",
  "import ThemeProvider from '../components/themeProvider.component'",
  "import Button from '../components/button.component'",
  "import navigateOutside from '../functions/navigateOutside'",
  "import showAlert from '../functions/showAlert'",
  "import { useNavigate } from 'react-router-dom'",
  "import {createTheme} from '@mui/material'",
  "import websiteTheme from '../theme'",
];

function generatePage(nameOfPage, pageContents, theme) {
  const code = [...IMPORTS];
  code.push(`function ${toPascalCase(nameOfPage)}() {`);
  code.push(`   const navigate = useNavigate();`);
  code.push(`   const theme = createTheme(websiteTheme);`);
  code.push(`   return (`);
  code.push(`     ${pageContents}`);
  code.push(`   );`);
  code.push(`}`);
  code.push("");
  code.push(`export default ${toPascalCase(nameOfPage)};`);
  return {
    title: toPascalCase(nameOfPage),
    contents: code.join("\r"),
  };
}

//function that transforms string to PascalCase
function toPascalCase(str) {
  return str.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
}

export { generatePage, toPascalCase };
