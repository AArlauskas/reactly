import Blockly from "blockly";
import { useCallback } from "react";
import { useEffect, useState } from "react";

const initialCustomFunctions = [
  {
    name: "myFunction",
    value: "{\n  // code here\n}",
  },
];

const defineBlocklyFunction = (func) => {
  Blockly.Blocks[`custom_function_${func.name}`] = {
    init: function () {
      this.appendDummyInput().appendField(`${func.name}`);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setOutput(true, "Text");
    },
  };

  Blockly.React[`custom_function_${func.name}`] = (block) => {
    const { name } = func;
    const funcString = `() => ${name}()`;
    return [funcString, Blockly.JavaScript.ORDER_ATOMIC];
  };
};

const useCustomFunctions = ({ workspace }) => {
  const [functions, setFunctions] = useState([]);

  const getMappedFunctions = useCallback(() => {
    const mappedFuncs = {};
    for (let i = 0; i < functions.length; i++) {
      const func = functions[i];
      const funcString = `{ ${func.value} }`;
      // eslint-disable-next-line no-new-func
      const mappedFunc = new Function(funcString);
      mappedFuncs[func.name] = mappedFunc;
    }
    return mappedFuncs;
  }, [functions]);

  useEffect(() => {
    const customFunctions = localStorage.getItem("customFunctions");
    if (customFunctions) {
      setFunctions(JSON.parse(customFunctions));
    } else {
      setFunctions(initialCustomFunctions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("customFunctions", JSON.stringify(functions));
  }, [functions]);

  useEffect(() => {
    if (!workspace) return;

    const customFunctionsCallback = () => {
      const result = [];
      for (let i = 0; i < functions.length; i++) {
        const func = functions[i];
        result.push({
          kind: "block",
          type: `custom_function_${func.name}`,
        });
      }
      return result;
    };

    workspace.registerToolboxCategoryCallback(
      "CUSTOM_FUNCTIONS",
      customFunctionsCallback
    );
  }, [workspace, functions]);

  useEffect(() => {
    functions.forEach((func) => {
      defineBlocklyFunction(func);
    });
  }, [functions]);

  const onFunctionAdd = (rule) => {
    //check if function already exists, then update
    const existingFunction = functions.find((f) => f.name === rule.name);
    if (existingFunction) {
      const newFunctions = functions.map((f) => {
        if (f.name === rule.name) {
          return rule;
        }
        return f;
      });
      setFunctions(newFunctions);
    } else {
      setFunctions([...functions, rule]);
    }
  };

  return {
    onFunctionAdd,
    getMappedFunctions,
  };
};

export default useCustomFunctions;
