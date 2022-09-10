import Blockly from "blockly";

Blockly.Blocks["paddingRight"] = {
  init: function () {
    this.setColour(775);
    this.setTooltip("Adds padding on right side of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Padding right")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "PADDING_RIGHT")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["paddingRight"] = (block) => {
  const padding = block.getFieldValue("PADDING_RIGHT");
  const unit = block.getFieldValue("UNIT");
  return `paddingRight: "${padding}${unit}",`;
};
