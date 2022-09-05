import Blockly from "blockly";

Blockly.Blocks["height"] = {
  init: function () {
    this.setColour(200);
    this.setTooltip("Sets height of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Height")
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "HEIGHT")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      );
  },
};

Blockly.React["height"] = (block) => {
  const height = block.getFieldValue("HEIGHT");
  const unit = block.getFieldValue("UNIT");
  return `height: "${height}${unit}",`;
};
