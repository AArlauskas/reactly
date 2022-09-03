import Blockly from "blockly";

Blockly.Blocks["marginLeft"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds margin on left side of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Margin left")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "MARGIN_LEFT");
  },
};

Blockly.React["marginLeft"] = (block) => {
  const margin = block.getFieldValue("MARGIN_LEFT");
  return `marginLeft: "${margin}px",`;
};
