import Blokcly from "blockly";

Blokcly.Blocks["table_column"] = {
  init: function () {
    //add title and key as inputs
    this.appendDummyInput()
      .appendField("Column")
      .appendField(new Blokcly.FieldTextInput("Title"), "title")
      .appendField(new Blokcly.FieldTextInput("key"), "key");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blokcly.React["table_column"] = function (block) {
  const title = block.getFieldValue("title");
  const field = block.getFieldValue("key");
  const column = {
    title: title,
    field: field,
  };

  const columnString = JSON.stringify(column) + ",";
  return [columnString].join("\n");
};
