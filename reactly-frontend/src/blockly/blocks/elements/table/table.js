import Blockly from "blockly";

Blockly.Blocks["table"] = {
  init: function () {
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //input for table name
    this.appendDummyInput()
      .appendField("Table")
      .appendField(new Blockly.FieldTextInput("Table Name"), "name");

    //input for table page size (number of rows) from dropdown increment by 5
    this.appendDummyInput()
      .appendField("Page Size")
      .appendField(new Blockly.FieldNumber(5, 5, 100, 5), "pageSize");

    //input for table data source
    this.appendDummyInput()
      .appendField("Data Source")
      .appendField(new Blockly.FieldTextInput("Data Source URL"), "dataSource");

    //input for table data accessor key
    this.appendDummyInput()
      .appendField("Data Accessor")
      .appendField(
        new Blockly.FieldTextInput("Data Accessor Key"),
        "dataAccessor"
      );

    //child blocks for table_column
    this.appendStatementInput("table_column").appendField("Columns:");

    //styling modifiers
    this.appendStatementInput("MODIFIERS").appendField("Modifiers:");
  },
};

Blockly.React["table"] = function (block) {
  const name = block.getFieldValue("name");
  const pageSize = block.getFieldValue("pageSize");
  const dataSource = block.getFieldValue("dataSource");
  const columns = Blockly.React.statementToCode(block, "table_column");
  const dataAccessor = block.getFieldValue("dataAccessor");
  const modifiers = Blockly.React.statementToCode(block, "MODIFIERS");

  const code = [];

  code.push(
    `<Table title={"${name}"} modifiers={{${modifiers}}} pageSize={${pageSize}} dataURL={"${dataSource}"} accessor={"${dataAccessor}"} columns={
        [
            ${columns}
        ]
    } />`
  );

  //   code.push(`<div>Hello there</div>`);

  return code.join("\n");
};
