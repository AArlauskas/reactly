import { toPascalCase } from "./page-builder";
function generateRoot(screens) {
  return `
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    ${generatePageImports(screens)}
  function App() {
        return (
            <Router> 
                <Routes>
                    ${screens
                      .map(
                        (screen) =>
                          `<Route exact path="/${
                            screen.name
                          }" element={<${toPascalCase(screen.name)} />} />`
                      )
                      .join("\n")}
                      <Route path="*" element={<${toPascalCase(
                        screens[0].name
                      )} />} />
                </Routes>
            </Router>
        )
    }
    export default App;`;
}

function generatePageImports(screens) {
  return screens
    .map(
      (screen) =>
        `import ${toPascalCase(screen.name)} from './pages/${toPascalCase(
          screen.name
        )}.jsx'`
    )
    .join("\n");
}

export { generateRoot };
