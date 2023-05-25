import Blockly from "blockly";

Blockly.Blocks["borderRadius"] = {
  init: function () {
    this.setColour(750);
    this.setTooltip("Adds border radius on all sides of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Border Radius")
      .appendField(
        new Blockly.FieldDropdown([["border-radius", "borderRadius"]]),
        "SIDE"
      )
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "BORDER")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["borderRadius"] = (block) => {
  const side = block.getFieldValue("SIDE");
  const border = block.getFieldValue("BORDER");
  const unit = block.getFieldValue("UNIT");
  const code = `${side}: "${border}${unit}",`;
  return code;
};
