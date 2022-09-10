import Blockly from "blockly";

Blockly.Blocks["textAlignment"] = {
  init: function () {
    this.setColour(600);
    this.setTooltip("Sets text alignment of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Text alignment: ")
      .appendField(
        new Blockly.FieldDropdown([
          ["Left", "left"],
          ["Center", "center"],
          ["Right", "right"],
          ["Justify", "justify"],
        ]),
        "ALIGNMENT"
      );
  },
};

Blockly.React["textAlignment"] = (block) => {
  const alignment = block.getFieldValue("ALIGNMENT");
  return `textAlign: "${alignment}",`;
};
