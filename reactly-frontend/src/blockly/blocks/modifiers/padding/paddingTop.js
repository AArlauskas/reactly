import Blockly from "blockly";

Blockly.Blocks["paddingTop"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds padding on top of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Padding top")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "PADDING_TOP");
  },
};

Blockly.React["paddingTop"] = (block) => {
  const padding = block.getFieldValue("PADDING_TOP");
  return `paddingTop: "${padding}px",`;
};
