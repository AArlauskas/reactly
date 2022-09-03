import Blockly from "blockly";

Blockly.Blocks["paddingLeft"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds padding on left side of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Padding left")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "PADDING_LEFT");
  },
};

Blockly.React["paddingLeft"] = (block) => {
  const padding = block.getFieldValue("PADDING_LEFT");
  return `paddingLeft: "${padding}px",`;
};
