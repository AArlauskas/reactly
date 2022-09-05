import Blockly from "blockly";

Blockly.Blocks["margin"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds margin on all sides of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Margin")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "MARGIN")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["margin"] = (block) => {
  const margin = block.getFieldValue("MARGIN");
  const unit = block.getFieldValue("UNIT");
  return `margin: ${margin}${unit},`;
};
