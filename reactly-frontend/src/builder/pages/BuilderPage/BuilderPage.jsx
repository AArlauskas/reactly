import JsxParser from "react-jsx-parser";
import "./styles.css";
import BlocklySplit from "../BlocklySplit/BlocklySplit";
import "allotment/dist/style.css";
import Blockly from "blockly";
import { useEffect, useState } from "react";
import toolboxes, { components, functions } from "../../../blockly/toolbox";
import { ApplicationBar } from "../../components/ApplicationBar";
import { SpeedDial, SpeedDialAction, createTheme } from "@mui/material";
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
import { updateWebsiteContent } from "../../api/authApi";
import { generateThemeFile } from "../../utils/theme-builder";
import { useHistory } from "react-router-dom";
import { Add, FormatPaint, Functions, Psychology } from "@mui/icons-material";
import useCustomCss from "./useCustomCss";
import AddRuleModal from "../../components/AddRuleModal";
import AddFunctionModal from "../../components/AddFunctionModal/AddFunctionModal";
import useCustomFunctions from "./useCustomFunctions";
import AddGptModal from "../../components/AddGptModal";

function BuilderPage() {
  const history = useHistory();

  const [currentWorkspace, setCurrentWorkspace] = useState(null);
  const [currentToolboxId, setCurrentToolboxId] = useState("0");
  const [currentScreenId, setCurrentScreenId] = useState("0");
  const [currentCode, setCurrentCode] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [theme, setTheme] = useState(null);
  const [websiteId, setWebsiteId] = useState(null);
  const [initialXml, setInitialXml] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const [isAddRuleModalOpen, setIsAddRuleModalOpen] = useState(false);
  const [isAddFunctionModalOpen, setIsAddFunctionModalOpen] = useState(false);
  const [isGptModalOpen, setIsGptModalOpen] = useState(false);
  const [availableScreens, setAvailableScreens] = useState([]);

  const onGoBack = () => history.goBack();

  const { onRuleAdd } = useCustomCss({ workspace: currentWorkspace });
  const { onFunctionAdd, getMappedFunctions } = useCustomFunctions({
    workspace: currentWorkspace,
  });

  useEffect(() => {
    return () => {
      if (history.action === "POP") {
        const content = getInitialXml();
        updateWebsiteContent({
          websiteId: websiteId,
          content: content,
        });
      }
    };
  }, [history, websiteId]);

  useEffect(() => {
    const id = history?.location?.state?.id;
    const content = history?.location?.state?.content;

    if (id) {
      setWebsiteId(id);
      setInitialXml(content === "" ? undefined : content);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [history, websiteId]);

  function updateCurrentWorkspace(workspace) {
    console.log(
      Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace))
    );
    setCurrentWorkspace(workspace);
    storeCurrentWorkspace(workspace);
    const screenBlocks = getScreenBlocksFromWorkspace(workspace);
    const screen = screenBlocks.find((s) => s.id === currentScreenId);
    const code = Blockly.React.blockToCode(screen) || "";
    setCurrentCode(code);
    
    const foundScreens = getScreensOptions(workspace);
    if(foundScreens.length !== availableScreens.length) {
      setAvailableScreens(foundScreens);
    }
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
      "Please unzip the project and read the README file for instructions of how to start the project"
    );
  };

  if (isLoading) return <div>Loading...</div>;

  const onGeneratedAnswerAdd = (answer, workspace) => {
    const xml = `      <block type="typography">
    <field name="VARIANT">body1</field>
    <value name="TEXT_INPUT">
      <block type="text">
        <field name="TEXT_OUTPUT">${answer}</field>
      </block>
    </value>
  </block>`;
    const block = Blockly.Xml.domToBlock(Blockly.Xml.textToDom(xml), workspace);

    // Move the block to a specific position
    block.moveBy(100, 100);
  };

  return (
    <>
      <AddRuleModal
        isOpen={isAddRuleModalOpen}
        onAdd={onRuleAdd}
        onCancel={() => setIsAddRuleModalOpen(false)}
      />
      <AddFunctionModal
        isOpen={isAddFunctionModalOpen}
        onCancel={() => setIsAddFunctionModalOpen(false)}
        onAdd={onFunctionAdd}
      />
      <AddGptModal
        isOpen={isGptModalOpen}
        onCancel={() => setIsGptModalOpen(false)}
        onAdd={(answer) => onGeneratedAnswerAdd(answer, currentWorkspace)}
      />
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
        onGoBack={onGoBack}
      />
      <div className="builder-page">
        {!isExpanded && initialXml !== null && (
          <div style={{ width: "50%" }}>
            <BlocklySplit
              setCurrentWorkspace={updateCurrentWorkspace}
              initialXml={initialXml}
              toolbox={getCurrentToolBox()}
            />
          </div>
        )}
        <div
          className="builder-page__preview"
          style={{ width: isExpanded ? "100%" : "50%", overflowY: "scroll" }}
        >
          <JsxParser
            bindings={{
              ...functions,
              theme: generateTheme(),
              ...getMappedFunctions(),
            }}
            jsx={currentCode}
            components={components}
            onError={(error) => console.log(error)}
            blacklistedAttrs={[]}
          />
        </div>
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{ position: "absolute", bottom: 30, left: 16 }}
          icon={<Add />}
        >
          {/* <SpeedDialAction
            key="delete"
            icon={<Delete />}
            tooltipTitle="Clear saved functions and css rules"
            onClick={() => {
              localStorage.removeItem("cssRules");
              localStorage.removeItem("customFunctions");
            }}
          /> */}
          <SpeedDialAction
            key="function"
            icon={<Functions />}
            tooltipTitle="Add function"
            onClick={() => setIsAddFunctionModalOpen(true)}
          />
          <SpeedDialAction
            key="css"
            icon={<FormatPaint />}
            tooltipTitle="Add css rule"
            onClick={() => setIsAddRuleModalOpen(true)}
          />
          <SpeedDialAction
            key="gpt"
            icon={<Psychology />}
            tooltipTitle="Create text with Chat GPT-3"
            onClick={() => setIsGptModalOpen(true)}
          />
        </SpeedDial>
      </div>
    </>
  );
}

export default BuilderPage;
