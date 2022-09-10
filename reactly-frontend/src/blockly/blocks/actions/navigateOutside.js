import Blockly from "blockly";

Blockly.Blocks["navigateOutside"] = {
  init: function () {
    this.setColour(100);
    this.setTooltip("Navigates to a new page outside of the app");
    this.appendValueInput("TEXT").appendField(
      "Navigate outside to another website"
    );
    this.setOutput(true, "Text");
  },
};

Blockly.React["navigateOutside"] = (block) => {
  const text = Blockly.React.valueToCode(
    block,
    "TEXT",
    Blockly.React.ORDER_ATOMIC
  );
  return [`() => navigateOutside("${text}")`, Blockly.React.ORDER_ATOMIC];
};
