import Blockly from "blockly";

Blockly.Blocks["imageList"] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput().appendField("Image list");
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
    this.appendDummyInput()
      .appendField("Columns")
      .appendField(new Blockly.FieldNumber(1, 1, 10), "COLUMNS");
    this.appendStatementInput("IMAGES").appendField("Images");
  },
};

Blockly.React["imageList"] = (block) => {
  const code = [];
  const columns = `${Number(block.getFieldValue("COLUMNS"))}` || 1;
  const images = Blockly.React.statementToCode(block, "IMAGES");
  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");
  code.push(`<ImageList cols={${columns}} modifiers={{${modifiers}}}>`);
  code.push(images);
  code.push(`</ImageList>`);
  return code.join("\n");
};
