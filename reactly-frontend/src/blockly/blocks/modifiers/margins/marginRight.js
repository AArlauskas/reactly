import Blockly from "blockly";

Blockly.Blocks["marginRight"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds margin on right side of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Margin right")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "MARGIN_RIGHT");
  },
};

Blockly.React["marginRight"] = (block) => {
  const margin = block.getFieldValue("MARGIN_RIGHT");
  return `marginRight: "${margin}px",`;
};
