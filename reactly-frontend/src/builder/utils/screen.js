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

export { getScreenBlocksFromWorkspace, getScreensOptions };
