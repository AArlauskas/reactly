import JsxParser from "react-jsx-parser";
import "./styles.css";
import BlocklySplit from "../BlocklySplit/BlocklySplit";
import "allotment/dist/style.css";
import Blockly from "blockly";
import { useState } from "react";
import toolboxes, { components, functions } from "../../../blockly/toolbox";
import { ApplicationBar } from "../../components/ApplicationBar";
import {
  getInitialXml,
  getScreenBlocksFromWorkspace,
  getScreensOptions,
  storeCurrentWorkspace,
} from "../../utils";

function BuilderPage() {
  const [currentWorkspace, setCurrentWorkspace] = useState(null);
  const [currentToolboxId, setCurrentToolboxId] = useState("0");
  const [currentScreenId, setCurrentScreenId] = useState("0");
  const [currentCode, setCurrentCode] = useState(null);

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

  return (
    <>
      <ApplicationBar
        onToolboxOptionChange={onCurrentToolboxChange}
        toolboxOptions={toolboxes}
        selectedToolboxId={currentToolboxId}
        screens={getScreensOptions(currentWorkspace)}
        currentScreenId={currentScreenId}
        setCurrentScreenId={setCurrentScreenId}
      />
      <div className="builder-page">
        <div style={{ width: "50%" }}>
          <BlocklySplit
            setCurrentWorkspace={updateCurrentWorkspace}
            initialXml={getInitialXml()}
            toolbox={getCurrentToolBox()}
          />
        </div>
        <div style={{ width: "50%", overflowY: "scroll" }}>
          <JsxParser
            bindings={functions}
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
