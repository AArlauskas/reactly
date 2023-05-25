import PageSelect from "../PageSelect";
import ToolBoxSelect from "../ToolboxSelect";
import {
  ArrowBack,
  CloseFullscreen,
  Download,
  OpenInFull,
  QuestionMark,
  Settings,
} from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import Fab from "../Fab";
import { useState } from "react";
import CodeViewer from "../CodeViewer/CodeViewer";
import ThemeCustomizer from "../ThemeCustomizer/ThemeCustomizer";
import BuilderTour from "../Tour";

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
  onDownloadClick,
  onGoBack,
}) {
  const [isCodeViewerOpen, setIsCodeViewerOpen] = useState(false);
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(
    window.localStorage.getItem("tour") === "true" ||
      window.localStorage.getItem("tour") === null
  );

  const onTourClose = () => {
    setIsTourOpen(false);
    window.localStorage.setItem("tour", "false");
  };

  const onTourOpen = () => {
    setIsTourOpen(true);
    window.localStorage.setItem("tour", "true");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: "50px",
        }}
      >
        <div>
          <BuilderTour isOpen={isTourOpen} onClose={onTourClose} />
          <Fab
            FabIcon={ArrowBack}
            label={"Back to websites"}
            onClick={onGoBack}
          />
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
              className={"full-screen-button"}
            />
          ) : (
            <Fab
              FabIcon={OpenInFull}
              label="Expand"
              onClick={() => setIsExpanded(true)}
              className={"full-screen-button"}
            />
          )}
          <Fab
            FabIcon={CodeIcon}
            label="Code"
            onClick={() => setIsCodeViewerOpen(true)}
            className={"code-button"}
          />
          <Fab
            FabIcon={Settings}
            label="Theme settings"
            onClick={() => setIsThemeSettingsOpen(true)}
            className={"theme-settings-button"}
          />
          <Fab
            FabIcon={Download}
            label="Download project"
            onClick={() => onDownloadClick()}
            className={"download-button"}
          />
          <Fab
            FabIcon={QuestionMark}
            label="Tour"
            onClick={() => onTourOpen()}
            className={"tour-button"}
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
