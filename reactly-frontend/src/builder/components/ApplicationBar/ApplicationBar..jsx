import PageSelect from "../PageSelect";
import ToolBoxSelect from "../ToolboxSelect";
import { CloseFullscreen, OpenInFull, Settings } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import Fab from "../Fab";
import { useState } from "react";
import CodeViewer from "../CodeViewer/CodeViewer";
import ThemeCustomizer from "../ThemeCustomizer/ThemeCustomizer";

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
  onThemeChange,
}) {
  const [isCodeViewerOpen, setIsCodeViewerOpen] = useState(false);
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);

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
          <Fab
            FabIcon={Settings}
            label="Theme settings"
            onClick={() => setIsThemeSettingsOpen(true)}
          />
        </div>
      </div>
      <hr style={{ padding: 0, margin: 0 }} />
      <CodeViewer
        isOpen={isCodeViewerOpen}
        onClose={() => setIsCodeViewerOpen(false)}
        code={code}
      />
      <ThemeCustomizer
        isOpen={isThemeSettingsOpen}
        onThemeChange={onThemeChange}
        onClose={() => setIsThemeSettingsOpen(false)}
      />
    </>
  );
}

export default ApplicationBar;
