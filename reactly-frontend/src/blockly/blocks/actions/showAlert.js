import Blockly from "blockly";

Blockly.Blocks["showAlert"] = {
  init: function () {
    this.setColour(400);
    this.setTooltip("Show an alert");
    this.appendValueInput("TEXT").appendField("Show alert with text");
    this.setOutput(true, "Text");
  },
};

Blockly.React["showAlert"] = (block) => {
  const text = Blockly.React.valueToCode(
    block,
    "TEXT",
    Blockly.React.ORDER_ATOMIC
  );
  return [`() => showAlert("${text}")`, Blockly.React.ORDER_ATOMIC];
};
