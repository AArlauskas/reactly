import JsxParser from "react-jsx-parser";
import "./styles.css";
import BlocklySplit from "../BlocklySplit/BlocklySplit";
import "allotment/dist/style.css";
import { Allotment } from "allotment";
import { useState } from "react";

function BuilderPage() {
  const [currentWidth, setCurrentWidth] = useState(null);
  return (
    <div style={{ height: "100vh" }}>
      <Allotment onChange={(sizes) => setCurrentWidth(sizes[0])} minSize={200}>
        <BlocklySplit width={currentWidth} />
        <JsxParser jsx={`<h1>Rytas</h1>`} />
      </Allotment>
    </div>
  );
}

export default BuilderPage;
