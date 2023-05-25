import Blockly from "blockly";

Blockly.Blocks["border"] = {
  init: function () {
    this.setColour(750);
    this.setTooltip("Adds border on all sides of element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField("Border")
      .appendField(
        new Blockly.FieldDropdown([
          ["border", "border"],
          ["border-left", "borderLeft"],
          ["border-right", "borderRight"],
          ["border-top", "borderTop"],
          ["border-bottom", "borderBottom"],
        ]),
        "SIDE"
      )
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), "BORDER")
      .appendField(
        new Blockly.FieldDropdown([
          ["px", "px"],
          ["%", "%"],
        ]),
        "UNIT"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["solid", "solid"],
          ["dotted", "dotted"],
          ["dashed", "dashed"],
          ["double", "double"],
          ["groove", "groove"],
          ["ridge", "ridge"],
          ["inset", "inset"],
          ["outset", "outset"],
          ["none", "none"],
          ["hidden", "hidden"],
        ]),
        "TYPE"
      )
      .appendField(new Blockly.FieldColour("#000000"), "COLOR");
  },
};

Blockly.React["border"] = (block) => {
  const side = block.getFieldValue("SIDE");
  const border = block.getFieldValue("BORDER");
  const unit = block.getFieldValue("UNIT");
  const type = block.getFieldValue("TYPE");
  const color = block.getFieldValue("COLOR");
  const code = `${side}: "${border}${unit} ${type} ${color}",`;
  return code;
};
