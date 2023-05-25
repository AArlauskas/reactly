import Blockly from "blockly";

Blockly.Blocks["text"] = {
  init: function () {
    this.setColour(400);
    this.setTooltip("Outputs a text");
    this.appendDummyInput().appendField(
      new Blockly.FieldMultilineInput("Lorem Ipsum"),
      "TEXT_OUTPUT"
    );
    this.setOutput(true, "Text");
  },
};

Blockly.React["text"] = (block) => {
  const text = block.getFieldValue("TEXT_OUTPUT");
  const splittedText = JSON.stringify(text.split("\n"));
  return [splittedText, Blockly.React.ORDER_ATOMIC];
};
