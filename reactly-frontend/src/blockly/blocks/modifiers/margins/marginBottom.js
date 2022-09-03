import Blockly from "blockly";

Blockly.Blocks["marginBottom"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds margin on bottom of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Margin bottom")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "MARGIN_BOTTOM");
  },
};

Blockly.React["marginBottom"] = (block) => {
  const margin = block.getFieldValue("MARGIN_BOTTOM");
  return `marginBottom: "${margin}px",`;
};
