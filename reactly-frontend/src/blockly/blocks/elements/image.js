import Blockly from "blockly";

Blockly.Blocks["image"] = {
  init: function () {
    this.appendDummyInput().appendField("Image");
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
    this.appendValueInput("ON_CLICK").appendField("On click: ");
    this.appendValueInput("IMAGE_INPUT").appendField("Image's URL");
    this.appendValueInput("ALT_INPUT").appendField("Image's alt text");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
};

Blockly.React["image"] = (block) => {
  const code = [];
  const image = Blockly.React.valueToCode(
    block,
    "IMAGE_INPUT",
    Blockly.React.ORDER_ATOMIC
  );
  const alt = Blockly.React.valueToCode(
    block,
    "ALT_INPUT",
    Blockly.React.ORDER_ATOMIC
  );
  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");
  const onClick = Blockly.React.valueToCode(
    block,
    "ON_CLICK",
    Blockly.React.ORDER_ATOMIC
  );
  code.push(
    `<img src={"${image}"} alt={"${alt}"} style={{${modifiers}}} onClick={${
      onClick || "() => {}"
    }} />`
  );
  return code.join("\n");
};
