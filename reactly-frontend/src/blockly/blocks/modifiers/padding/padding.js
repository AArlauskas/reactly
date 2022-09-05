import Blockly from "blockly";

Blockly.Blocks["padding"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds padding on all sides of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Padding")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "PADDING")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["padding"] = (block) => {
  const padding = block.getFieldValue("PADDING");
  const unit = block.getFieldValue("UNIT");
  return `padding: "${padding}${unit}",`;
};
