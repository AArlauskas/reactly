import Blockly from "blockly";

Blockly.Blocks["paddingLeft"] = {
  init: function () {
    this.setColour(775);
    this.setTooltip("Adds padding on left side of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Padding left")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "PADDING_LEFT")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["paddingLeft"] = (block) => {
  const padding = block.getFieldValue("PADDING_LEFT");
  const unit = block.getFieldValue("UNIT");
  return `paddingLeft: "${padding}${unit}",`;
};
