import Blockly from "blockly";

Blockly.Blocks["width"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Sets width of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Width")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "WIDTH")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["width"] = (block) => {
  const width = block.getFieldValue("WIDTH");
  const unit = block.getFieldValue("UNIT");
  return `width: "${width}${unit}",`;
};
