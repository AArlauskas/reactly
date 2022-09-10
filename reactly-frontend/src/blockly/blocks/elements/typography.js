import Blockly from "blockly";

Blockly.Blocks["typography"] = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput().appendField("Text input");
    this.appendDummyInput()
      .appendField("Text variant")
      .appendField(
        new Blockly.FieldDropdown([
          ["h1", "h1"],
          ["h2", "h2"],
          ["h3", "h3"],
          ["h4", "h4"],
          ["h5", "h5"],
          ["h6", "h6"],
          ["subtitle1", "subtitle1"],
          ["subtitle2", "subtitle2"],
          ["body1", "body1"],
          ["body2", "body2"],
          ["caption", "caption"],
          ["button", "button"],
          ["overline", "overline"],
          ["srOnly", "srOnly"],
          ["inherit", "inherit"],
        ]),
        "VARIANT"
      );
    this.appendValueInput("TEXT_INPUT").appendField("Text");
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
    this.appendValueInput("ON_CLICK").appendField("On click: ");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
};

Blockly.React["typography"] = (block) => {
  const code = [];
  const text = Blockly.React.valueToCode(
    block,
    "TEXT_INPUT",
    Blockly.React.ORDER_ATOMIC
  );
  const variant = block.getFieldValue("VARIANT");
  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");
  const onClick = Blockly.React.valueToCode(
    block,
    "ON_CLICK",
    Blockly.React.ORDER_ATOMIC
  );

  code.push(
    `<Typography variant={"${variant}"} text={"${text}"} modifiers={{${modifiers}}} onClick={${
      onClick || "() => {}"
    }} />`
  );
  return code.join("\n");
};
