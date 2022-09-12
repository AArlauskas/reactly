import PageSelect from "../PageSelect";
import ToolBoxSelect from "../ToolboxSelect";
import { CloseFullscreen, OpenInFull } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import Fab from "../Fab";
import { useState } from "react";
import CodeViewer from "../CodeViewer/CodeViewer";

function ApplicationBar({
  toolboxOptions,
  onToolboxOptionChange,
  selectedToolboxId,
  currentScreenId,
  setCurrentScreenId,
  screens,
  isExpanded,
  setIsExpanded,
  code,
}) {
  const [isCodeViewerOpen, setIsCodeViewerOpen] = useState(false);
  return (
    <>
      {console.log(isCodeViewerOpen)}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: "50px",
        }}
      >
        <div>
          <ToolBoxSelect
            onToolboxOptionChange={onToolboxOptionChange}
            selectedToolboxId={selectedToolboxId}
            toolboxOptions={toolboxOptions}
          />
        </div>
        <div>
          <PageSelect
            currentScreenId={currentScreenId}
            screens={screens}
            onChange={setCurrentScreenId}
          />
        </div>
        <div>
          {isExpanded ? (
            <Fab
              FabIcon={CloseFullscreen}
              label="Close full screen"
              onClick={() => setIsExpanded(false)}
            />
          ) : (
            <Fab
              FabIcon={OpenInFull}
              label="Expand"
              onClick={() => setIsExpanded(true)}
            />
          )}
          <Fab
            FabIcon={CodeIcon}
            label="Code"
            onClick={() => setIsCodeViewerOpen(true)}
          />
        </div>
      </div>
      <hr style={{ padding: 0, margin: 0 }} />
      <CodeViewer
        isOpen={isCodeViewerOpen}
        onClose={() => setIsCodeViewerOpen(false)}
        code={code}
      />
    </>
  );
}

export default ApplicationBar;
