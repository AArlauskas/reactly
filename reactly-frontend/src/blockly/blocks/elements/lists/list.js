import Blockly from "blockly";

Blockly.Blocks["list"] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setTooltip("List with possible list items");
    this.appendDummyInput().appendField("List");
    this.appendStatementInput("LIST_CONTENT").appendField("List items:");
  },
};

Blockly.React["list"] = (block) => {
  const listContent = Blockly.React.statementToCode(block, "LIST_CONTENT");

  const code = [];
  code.push(`<List>`);
  code.push(listContent);
  code.push(`</List>`);

  return code.join("\n");
};
