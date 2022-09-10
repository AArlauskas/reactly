import Blockly from "blockly";

Blockly.Blocks["marginBottom"] = {
  init: function () {
    this.setColour(750);
    this.setTooltip("Adds margin on bottom of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Margin bottom")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "MARGIN_BOTTOM")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["marginBottom"] = (block) => {
  const margin = block.getFieldValue("MARGIN_BOTTOM");
  const unit = block.getFieldValue("UNIT");
  return `marginBottom: "${margin}${unit}",`;
};
