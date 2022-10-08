import JsxParser from "react-jsx-parser";
import "./styles.css";
import BlocklySplit from "../BlocklySplit/BlocklySplit";
import "allotment/dist/style.css";
import Blockly from "blockly";
import { useState } from "react";
import toolboxes, { components, functions } from "../../../blockly/toolbox";
import { ApplicationBar } from "../../components/ApplicationBar";
import { createTheme } from "@mui/material";
import {
  getInitialXml,
  getScreenBlocksFromWorkspace,
  getScreensOptions,
  storeCurrentWorkspace,
} from "../../utils";
import { getScreens } from "../../utils/screen";
import { generatePage } from "../../utils/page-builder";
import { generateRoot } from "../../utils/root-builder";

import { downloadZippedProject } from "../../api/api";
import { generateThemeFile } from "../../utils/theme-builder";

function BuilderPage() {
  const [currentWorkspace, setCurrentWorkspace] = useState(null);
  const [currentToolboxId, setCurrentToolboxId] = useState("0");
  const [currentScreenId, setCurrentScreenId] = useState("0");
  const [currentCode, setCurrentCode] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [theme, setTheme] = useState(null);

  function updateCurrentWorkspace(workspace) {
    setCurrentWorkspace(workspace);
    storeCurrentWorkspace(workspace);
    const screenBlocks = getScreenBlocksFromWorkspace(workspace);
    const screen = screenBlocks.find((s) => s.id === currentScreenId);
    const code = Blockly.React.blockToCode(screen) || "";
    console.log(code);
    setCurrentCode(code);
  }

  const onCurrentToolboxChange = (id) => {
    setCurrentToolboxId(id);
  };

  const getCurrentToolBox = () => {
    const result = toolboxes.find(
      (toolbox) => toolbox.key === currentToolboxId
    );
    return result;
  };

  const handleThemeChange = (thene) => setTheme(thene);

  const generateTheme = () => {
    if (theme === null) return createTheme({});
    return createTheme(theme);
  };

  const onDownloadClick = () => {
    const screens = getScreens(currentWorkspace);
    const pages = screens.map((screen) =>
      generatePage(screen.name, screen.content, JSON.stringify(theme))
    );
    const root = generateRoot(screens);
    const websiteTheme = generateThemeFile(theme);
    const requestBody = { root, pages, theme: websiteTheme };
    downloadZippedProject(requestBody);
    alert(
      "Please unzip the project and run the start script"
    );
  };

  return (
    <>
      <ApplicationBar
        onToolboxOptionChange={onCurrentToolboxChange}
        toolboxOptions={toolboxes}
        selectedToolboxId={currentToolboxId}
        screens={getScreensOptions(currentWorkspace)}
        currentScreenId={currentScreenId}
        setCurrentScreenId={setCurrentScreenId}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        code={currentCode}
        onThemeChange={handleThemeChange}
        onDownloadClick={onDownloadClick}
      />
      <div className="builder-page">
        {!isExpanded && (
          <div style={{ width: "50%" }}>
            <BlocklySplit
              setCurrentWorkspace={updateCurrentWorkspace}
              initialXml={getInitialXml()}
              toolbox={getCurrentToolBox()}
            />
          </div>
        )}
        <div
          style={{ width: isExpanded ? "100%" : "50%", overflowY: "scroll" }}
        >
          <JsxParser
            bindings={{ ...functions, theme: generateTheme() }}
            jsx={currentCode}
            components={components}
            onError={(error) => console.log(error)}
            blacklistedAttrs={[]}
          />
        </div>
      </div>
    </>
  );
}

export default BuilderPage;
