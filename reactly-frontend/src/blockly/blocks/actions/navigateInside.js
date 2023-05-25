import Blockly from "blockly";

const navigateMenuGenerator = (block) => () => {
  const screenOptions = block.workspace.topBlocks_
    .filter((block) => block.type === "page")
    .map((block) => {
      const screenName = block.getFieldValue("PAGE_NAME");
      return [screenName, screenName];
    });
  if (screenOptions.length !== 0) {
    return screenOptions;
  } else {
    return [["PAGE_NAME", "NOT_SELECTED"]];
  }
};

Blockly.Blocks["navigateInside"] = {
  init: function () {
    this.setColour(100);
    this.setTooltip("Navigates to a page inside of the app");
    this.appendDummyInput()
      .appendField("Navigate to")
      .appendField(
        new Blockly.FieldDropdown(navigateMenuGenerator(this)),
        "SCREEN_TO_NAVIGATE"
      );
    this.setOutput(true, "Text");
  },
};

Blockly.React["navigateInside"] = (block) => {
  const screenName = block.getFieldValue("SCREEN_TO_NAVIGATE");
  return [`() => navigate("/${screenName}")`, Blockly.React.ORDER_ATOMIC];
};
