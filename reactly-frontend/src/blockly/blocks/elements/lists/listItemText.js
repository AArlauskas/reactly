import Blockly from "blockly";

Blockly.Blocks["listItemText"] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
    this.setTooltip("List item with text");
    this.appendValueInput("TEXT_PRIMARY_INPUT").appendField("List item text:");
  },
};

Blockly.React["listItemText"] = (block) => {
  const code = [];
  const primaryText = Blockly.React.valueToCode(
    block,
    "TEXT_PRIMARY_INPUT",
    Blockly.React.ORDER_ATOMIC
  );

  code.push(`<ListItemText primaryText={"${primaryText}"} />`);
  return code.join("\n");
};
