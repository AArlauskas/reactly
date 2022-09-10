import Blockly from "blockly";

Blockly.Blocks["backgroundColor"] = {
  init: function () {
    this.setColour(500);
    this.setTooltip("Sets background color of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Background color")
      .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
  },
};

Blockly.React["backgroundColor"] = (block) => {
  const color = block.getFieldValue("COLOR");
  return `backgroundColor: "${color}",`;
};
