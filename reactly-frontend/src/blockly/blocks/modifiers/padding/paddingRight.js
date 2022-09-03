import Blockly from "blockly";

Blockly.Blocks["paddingRight"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds padding on right side of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Padding right")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "PADDING_RIGHT");
  },
};

Blockly.React["paddingRight"] = (block) => {
  const padding = block.getFieldValue("PADDING_RIGHT");
  return `paddingRight: "${padding}px",`;
};
