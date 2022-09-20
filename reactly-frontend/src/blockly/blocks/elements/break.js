import Blockly from "blockly";

Blockly.Blocks["break"] = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput().appendField("Break");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
};

Blockly.React["break"] = (block) => {
  const code = [];
  code.push(`<br />`);
  return code.join("\n");
};
