import Blockly from "blockly";

Blockly.Blocks["page"] = {
  init: function () {
    this.setTooltip("Website's page");
    this.appendDummyInput()
      .appendField("Page")
      .appendField(new Blockly.FieldTextInput("NameOfPage"), "PAGE_NAME");
    this.appendStatementInput("PAGE_HEADER").appendField("Header:");
    this.appendStatementInput("PAGE_CONTENT").appendField("Content:");
    this.appendStatementInput("PAGE_FOOTER").appendField("Footer:");
  },
};

Blockly.React["page"] = (block) => {
  const pageName = block.getFieldValue("PAGE_NAME");
  const header = Blockly.React.statementToCode(block, "PAGE_HEADER");
  const pageContent = Blockly.React.statementToCode(block, "PAGE_CONTENT");
  const footer = Blockly.React.statementToCode(block, "PAGE_FOOTER");

  const code = [];
  code.push(`<div className="page ${pageName}">`);
  code.push(addPageHeader(header));
  code.push(addPageContent(pageContent));
  code.push(addPageFooter(footer));
  code.push(`</div>`);

  return code.join("\n");
};

function addPageHeader(header) {
  const code = [];
  code.push(`<div className="page-header">`);
  code.push(header);
  code.push(`</div>`);
  return code.join("\n");
}

function addPageContent(content) {
  const code = [];
  code.push(`<div className="page-content">`);
  code.push(content);
  code.push(`</div>`);
  return code.join("\n");
}

function addPageFooter(footer) {
  const code = [];
  code.push(`<div className="page-footer">`);
  code.push(footer);
  code.push(`</div>`);
  return code.join("\n");
}
