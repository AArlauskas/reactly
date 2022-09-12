import Fab from "../Fab/Fab";
import PageSelect from "../PageSelect";
import ToolBoxSelect from "../ToolboxSelect";
import { CloseFullscreen, Expand, OpenInFull } from "@mui/icons-material";

function ApplicationBar({
  toolboxOptions,
  onToolboxOptionChange,
  selectedToolboxId,
  currentScreenId,
  setCurrentScreenId,
  screens,
  isExpanded,
  setIsExpanded,
}) {
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
        </div>
      </div>
      <hr style={{ padding: 0, margin: 0 }} />
    </>
  );
}

export default ApplicationBar;
