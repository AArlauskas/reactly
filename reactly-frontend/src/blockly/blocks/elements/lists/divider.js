import Blockly from "blockly";

Blockly.Blocks["divider"] = {
  init: function () {
    this.setColour(300);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput().appendField("Divider");
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
  },
};

Blockly.React["divider"] = (block) => {
  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");
  return `<Divider modifiers={{${modifiers}}}/>`;
};
