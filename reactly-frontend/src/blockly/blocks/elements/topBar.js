import Blockly from "blockly";

Blockly.Blocks["topBar"] = {
  init: function () {
    this.setColour(200);
    this.setPreviousStatement(true);
    this.setTooltip("Website's top bar");
    this.appendDummyInput().appendField("Top Bar");
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
    this.appendStatementInput("TOP_BAR_LEFT_CONTENT").appendField(
      "Left Content:"
    );
    this.appendStatementInput("TOP_BAR_RIGHT_CONTENT").appendField(
      "Right Content:"
    );
  },
};

Blockly.React["topBar"] = (block) => {
  const topBarLeftContent = Blockly.React.statementToCode(
    block,
    "TOP_BAR_LEFT_CONTENT"
  );

  const topBarRightContent = Blockly.React.statementToCode(
    block,
    "TOP_BAR_RIGHT_CONTENT"
  );

  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");

  const code = [];
  code.push(`<TopBar modifiers={{${modifiers}}}>`);
  code.push(topBarLeftContent);
  code.push(`${Blockly.React.INDENT}<div style={{marginLeft: "auto"}}>`);
  code.push(topBarRightContent);
  code.push(`</div>`);
  code.push(`</TopBar>`);
  return code.join("\n");
};
