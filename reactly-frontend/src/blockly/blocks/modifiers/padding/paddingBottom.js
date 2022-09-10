import Blockly from "blockly";

Blockly.Blocks["paddingBottom"] = {
  init: function () {
    this.setColour(775);
    this.setTooltip("Adds padding on bottom of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Padding bottom")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "PADDING_BOTTOM")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["paddingBottom"] = (block) => {
  const padding = block.getFieldValue("PADDING_BOTTOM");
  const unit = block.getFieldValue("UNIT");
  return `paddingTop: "${padding}${unit}",`;
};
