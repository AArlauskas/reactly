import Blockly from "blockly";

function getScreenBlocksFromWorkspace(workspace) {
  if (workspace)
    return workspace
      .getTopBlocks(true)
      .filter((block) => block.type === "page");
  return [];
}

function getScreensOptions(workspace) {
  const screens = getScreenBlocksFromWorkspace(workspace);
  return screens.map((screen) => ({
    key: screen.id,
    label: screen.getFieldValue("PAGE_NAME"),
  }));
}

function getScreens(workspace) {
  const screens = getScreenBlocksFromWorkspace(workspace);
  return screens.map((screen) => ({
    name: screen.getFieldValue("PAGE_NAME"),
    content: Blockly.React.blockToCode(screen) || "",
  }));
}

export { getScreenBlocksFromWorkspace, getScreensOptions, getScreens };
