import PageSelect from "../PageSelect";
import ToolBoxSelect from "../ToolboxSelect";

function ApplicationBar({
  toolboxOptions,
  onToolboxOptionChange,
  selectedToolboxId,
  currentScreenId,
  setCurrentScreenId,
  screens,
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "30px",
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
        <div></div>
      </div>
      <hr style={{ padding: 0, margin: 0 }} />
    </>
  );
}

export default ApplicationBar;
