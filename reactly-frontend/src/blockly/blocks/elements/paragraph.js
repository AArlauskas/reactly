import Blockly from "blockly";

Blockly.Blocks["paragraph"] = {
  init: function () {
    this.setTooltip("Display a paragraph");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
};

Blockly.React["paragraph"] = (block) => {
  const code = [];
  return code.join("\n");
};
