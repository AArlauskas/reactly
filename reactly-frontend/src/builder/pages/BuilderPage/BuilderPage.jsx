import JsxParser from "react-jsx-parser";
import "./styles.css";
import BlocklySplit from "../BlocklySplit/BlocklySplit";
import "allotment/dist/style.css";
import { useState } from "react";
import { components } from "../../../blockly/toolbox";

function BuilderPage() {
  const [currentCode, setCurrentCode] = useState("");
  console.log(currentCode);
  return (
    <>
      <div style={{ height: "100vh", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <BlocklySplit setCurrentCode={setCurrentCode} />
        </div>
        <div style={{ width: "50%" }}>
          <JsxParser
            jsx={currentCode}
            components={components}
            onError={(error) => console.log(error)}
          />
        </div>
      </div>
    </>
  );
}

export default BuilderPage;
