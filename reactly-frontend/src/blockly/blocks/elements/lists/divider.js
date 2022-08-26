import Blockly from "blockly";

Blockly.Blocks["divider"] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput().appendField("Divider");
  },
};

Blockly.React["divider"] = (block) => {
  return ["<Divider />", Blockly.React.ORDER_ATOMIC];
};
