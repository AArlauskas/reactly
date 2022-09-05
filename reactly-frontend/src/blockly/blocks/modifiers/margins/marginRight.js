import Blockly from "blockly";

Blockly.Blocks["marginRight"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Adds margin on right side of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Margin right")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "MARGIN_RIGHT")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["marginRight"] = (block) => {
  const margin = block.getFieldValue("MARGIN_RIGHT");
  const unit = block.getFieldValue("UNIT");
  return `marginRight: "${margin}${unit}",`;
};
