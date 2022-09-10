import Blockly from "blockly";

function storeCurrentWorkspace(workspace) {
  const xml = Blockly.Xml.domToPrettyText(
    Blockly.Xml.workspaceToDom(workspace)
  );
  window.localStorage.setItem("workspace", xml);
}

function getInitialXml() {
  const xml = window.localStorage.getItem("workspace");
  if (xml) {
    return xml;
  }
  return null;
}

export { storeCurrentWorkspace, getInitialXml };
