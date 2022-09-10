import Blockly from "blockly";

Blockly.Blocks["textColor"] = {
  init: function () {
    this.setColour(500);
    this.setTooltip("Sets text color of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Text color")
      .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
  },
};

Blockly.React["textColor"] = (block) => {
  const color = block.getFieldValue("COLOR");
  return `color: "${color}",`;
};
