import Blockly from "blockly";

Blockly.Blocks["linkOutside"] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
    this.appendDummyInput().appendField("Link");
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
    this.appendValueInput("ON_CLICK").appendField("On click: ");
    this.appendValueInput("LINK_INPUT").appendField("Link:");
    this.appendValueInput("TEXT_INPUT").appendField("Text:");
  },
};

Blockly.React["linkOutside"] = (block) => {
  const code = [];
  const link = Blockly.React.valueToCode(
    block,
    "LINK_INPUT",
    Blockly.React.ORDER_ATOMIC
  );
  const text = Blockly.React.valueToCode(
    block,
    "TEXT_INPUT",
    Blockly.React.ORDER_ATOMIC
  );
  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");

  code.push(`<a href={"${link}"} style={{${modifiers}}} >${text}</a>`);
  return code.join("\n");
};
