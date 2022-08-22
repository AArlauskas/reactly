import { useRef } from "react";
import { useBlocklyWorkspace } from "react-blockly";
import toolbox from "../../../blockly/toolbox";
import Blockly from "blockly";

function BlocklySplit({ width, setCurrentCode }) {
  const blocklyRef = useRef(null);

  const { workspace } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolbox,
    workspaceConfiguration: {
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 2.0,
        minScale: 0.5,
      },
      trashcan: true,
    },
    onWorkspaceChange: (workspace) => {
      const code = Blockly.React.workspaceToCode(workspace);
      setCurrentCode(code);
    },
  });

  // console.log(workspace);

  return (
    <div ref={blocklyRef} style={{ height: "100vh", width: "100%" }}></div>
  );
}

export default BlocklySplit;
