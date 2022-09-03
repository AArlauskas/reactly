import Blockly from "blockly";

Blockly.Blocks["margin"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds margin on all sides of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Margin")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "MARGIN");
  },
};

Blockly.React["margin"] = (block) => {
  const margin = block.getFieldValue("MARGIN");
  return `margin: "${margin}px",`;
};
