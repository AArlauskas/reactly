import JsxParser from "react-jsx-parser";
import "./styles.css";
import BlocklySplit from "../BlocklySplit/BlocklySplit";
import "allotment/dist/style.css";
import Blockly from "blockly";
import { useState } from "react";
import toolboxes, { components, functions } from "../../../blockly/toolbox";
import { ApplicationBar } from "../../components/ApplicationBar";

function BuilderPage() {
  const [currentWorkspace, setCurrentWorkspace] = useState(null);
  const [currentToolboxId, setCurrentToolboxId] = useState("0");
  const [currentCode, setCurrentCode] = useState(null);

  function getInitialXml() {
    const xml = window.localStorage.getItem("workspace");
    if (xml) {
      return xml;
    }
    return null;
  }

  function updateCurrentWorkspace(workspace) {
    setCurrentWorkspace(workspace);
    storeCurrentWorkspace(workspace);
    const code = Blockly.React.workspaceToCode(workspace);
    console.log(code);
    setCurrentCode(code);
  }

  function storeCurrentWorkspace(workspace) {
    const xml = Blockly.Xml.domToPrettyText(
      Blockly.Xml.workspaceToDom(workspace)
    );
    window.localStorage.setItem("workspace", xml);
  }

  const onCurrentToolboxChange = (id) => {
    setCurrentToolboxId(id);
  };

  const getCurrentToolBox = () => {
    const result = toolboxes.find(
      (toolbox) => toolbox.key === currentToolboxId
    );
    console.log(result);
    return result;
  };

  return (
    <>
      <ApplicationBar
        onToolboxOptionChange={onCurrentToolboxChange}
        toolboxOptions={toolboxes}
        selectedToolboxId={currentToolboxId}
      />
      <div className="builder-page">
        <div style={{ width: "50%" }}>
          <BlocklySplit
            setCurrentWorkspace={updateCurrentWorkspace}
            initialXml={getInitialXml()}
            toolbox={getCurrentToolBox()}
          />
        </div>
        <div style={{ width: "50%" }}>
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
