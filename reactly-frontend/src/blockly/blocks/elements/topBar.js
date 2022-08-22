import Blockly from "blockly";

Blockly.Blocks["topBar"] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setTooltip("Website's top bar");
    this.appendDummyInput().appendField("Top Bar");
    this.appendStatementInput("TOP_BAR_CONTENT").appendField("Content:");
  },
};

Blockly.React["topBar"] = (block) => {
  const topBarContent = Blockly.React.statementToCode(block, "TOP_BAR_CONTENT");

  const code = [];
  code.push(`<TopBar>`);
  code.push(topBarContent);
  code.push(`</TopBar>`);

  return code.join("\n");
};
