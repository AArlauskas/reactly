import Blockly from "blockly";

Blockly.Blocks["button"] = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput().appendField("Button");
    this.appendValueInput("TEXT_INPUT").appendField("Text");
    this.appendValueInput("ON_CLICK").appendField("On click: ");
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
    this.appendDummyInput()
      .appendField("Button variant")
      .appendField(
        new Blockly.FieldDropdown([
          ["text", "text"],
          ["outlined", "outlined"],
          ["contained", "contained"],
        ]),
        "VARIANT"
      );
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
};

Blockly.React["button"] = (block) => {
  const code = [];
  const text = Blockly.React.valueToCode(
    block,
    "TEXT_INPUT",
    Blockly.React.ORDER_ATOMIC
  );
  const onClick = Blockly.React.valueToCode(
    block,
    "ON_CLICK",
    Blockly.React.ORDER_ATOMIC
  );
  const variant = block.getFieldValue("VARIANT");
  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");

  code.push(
    `<Button variant={"${variant}"} text={${text}} modifiers={{${modifiers} ${
      onClick && `cursor: "pointer"`
    }}} onClick={${onClick || "() => {}"}} />`
  );
  return code.join("\n");
};
