import Blockly from "blockly";

Blockly.Blocks["paddingTop"] = {
  init: function () {
    this.setColour(775);
    this.setTooltip("Adds padding on top of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Padding top")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "PADDING_TOP")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["paddingTop"] = (block) => {
  const padding = block.getFieldValue("PADDING_TOP");
  const unit = block.getFieldValue("UNIT");
  return `paddingTop: "${padding}${unit}",`;
};
