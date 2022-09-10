import JsxParser from "react-jsx-parser";
import "./styles.css";
import BlocklySplit from "../BlocklySplit/BlocklySplit";
import "allotment/dist/style.css";
import Blockly from "blockly";
import { useState } from "react";
import { components, functions } from "../../../blockly/toolbox";

function BuilderPage() {
  const [currentWorkspace, setCurrentWorkspace] = useState(null);
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

  return (
    <>
      <div style={{ height: "100vh", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <BlocklySplit
            setCurrentWorkspace={updateCurrentWorkspace}
            initialXml={getInitialXml()}
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
