import Blockly from "blockly";

Blockly.Blocks["imageList"] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput().appendField("Image list");
    this.appendDummyInput()
      .appendField("Columns")
      .appendField(new Blockly.FieldNumber(1, 1, 10), "COLUMNS");
    this.appendStatementInput("IMAGES").appendField("Images");
  },
};

Blockly.React["imageList"] = (block) => {
  const code = [];
  const columns = `${Number(block.getFieldValue("COLUMNS"))}` || 1;
  console.log(columns);
  const images = Blockly.React.statementToCode(block, "IMAGES");
  code.push(`<ImageList cols={${columns}}>`);
  code.push(images);
  code.push(`</ImageList>`);
  return code.join("\n");
};
