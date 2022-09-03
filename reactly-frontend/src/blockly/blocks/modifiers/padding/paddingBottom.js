import Blockly from "blockly";

Blockly.Blocks["paddingBottom"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds padding on bottom of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Padding bottom")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "PADDING_BOTTOM");
  },
};

Blockly.React["paddingBottom"] = (block) => {
  const padding = block.getFieldValue("PADDING_BOTTOM");
  return `paddingTop: "${padding}px",`;
};
