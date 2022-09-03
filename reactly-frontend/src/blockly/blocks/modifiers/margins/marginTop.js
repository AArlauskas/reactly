import Blockly from "blockly";

Blockly.Blocks["marginTop"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds margin on top of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Margin top")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "MARGIN_TOP");
  },
};

Blockly.React["marginTop"] = (block) => {
  const margin = block.getFieldValue("MARGIN_TOP");
  return `marginTop: "${margin}px",`;
};
