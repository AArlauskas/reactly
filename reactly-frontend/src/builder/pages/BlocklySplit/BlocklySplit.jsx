import { useRef, useState } from "react";
import { useBlocklyWorkspace } from "react-blockly";

function BlocklySplit({ width }) {
  const [currentXml, setCurrentXml] = useState("");
  const blocklyRef = useRef(null);

  const { workspace } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: { kind: "categoryToolbox", contents: [] },
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
    onWorkspaceChange: undefined,
  });

  console.log(blocklyRef);

  return <div ref={blocklyRef} style={{ height: "100vh", width: width }}></div>;
}

export default BlocklySplit;
