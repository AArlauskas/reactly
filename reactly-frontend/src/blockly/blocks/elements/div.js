import Blockly from "blockly";

Blockly.Blocks["div"] = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput().appendField("Div");
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
    this.appendStatementInput("CONTENT").appendField("Content:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
};

Blockly.React["div"] = (block) => {
  const code = [];
  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");
  const content = Blockly.React.statementToCode(block, "CONTENT");

  code.push(`<div style={{${modifiers}}}>${content}</div>`);
  return code.join("\n");
};
