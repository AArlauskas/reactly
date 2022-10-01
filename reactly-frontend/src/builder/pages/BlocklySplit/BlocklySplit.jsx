import { useRef } from "react";
import { useBlocklyWorkspace } from "react-blockly";

function BlocklySplit({ setCurrentWorkspace, initialXml, toolbox }) {
  const blocklyRef = useRef(null);

  useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolbox,
    initialXml,
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
      setCurrentWorkspace(workspace);
    },
  });

  return (
    <div
      ref={blocklyRef}
      className="blockly-space"
      style={{ width: "100%" }}
    ></div>
  );
}

export default BlocklySplit;
