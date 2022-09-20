import Blockly from "blockly";

Blockly.Blocks["flex"] = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput().appendField("Flex");
    this.appendDummyInput()
      .appendField("Direction")
      .appendField(
        new Blockly.FieldDropdown([
          ["row", "row"],

          ["column", "column"],
        ]),
        "FLEX_DIRECTION"
      );
    this.appendDummyInput()
      .appendField("Justify")
      .appendField(
        new Blockly.FieldDropdown([
          ["start", "flex-start"],
          ["end", "flex-end"],
          ["center", "center"],
          ["between", "space-between"],
          ["around", "space-around"],
          ["evenly", "space-evenly"],
        ]),
        "JUSTIFY_CONTENT"
      );
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
    this.appendStatementInput("CONTENT").appendField("Content:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
};

Blockly.React["flex"] = (block) => {
  const code = [];
  const flexDirection = block.getFieldValue("FLEX_DIRECTION");
  const justifyContent = block.getFieldValue("JUSTIFY_CONTENT");
  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");
  const content = Blockly.React.statementToCode(block, "CONTENT");

  code.push(
    `<div style={{display: "flex", flexDirection: "${flexDirection}", justifyContent: "${justifyContent}", ${modifiers}}}>${content}</div>`
  );
  return code.join("\n");
};
