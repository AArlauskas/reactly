import Blockly from "blockly";
import { useEffect, useState } from "react";

const initialCustomRules = [
  {
    name: "marginBottom",
    value: "10px",
  },
  {
    name: "marginTop",
    value: "10px",
  },
];

const defineBlocklyRule = (rule) => {
  Blockly.Blocks[`custom_css_${rule.name}`] = {
    init: function () {
      this.appendDummyInput().appendField(`${rule.name}: ${rule.value}`);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    },
  };

  Blockly.React[`custom_css_${rule.name}`] = (block) => {
    const { name, value } = rule;

    const valueWithoutQuotes = value.replace(/"/g, "");
    console.log("valueWithoutQuotes", valueWithoutQuotes);

    const isQuotesNeeded =
      isNaN(Number.parseFloat(valueWithoutQuotes)) ||
      valueWithoutQuotes.includes("px") ||
      valueWithoutQuotes.includes("em") ||
      valueWithoutQuotes.includes("rem") ||
      valueWithoutQuotes.includes("vh") ||
      valueWithoutQuotes.includes("vw") ||
      valueWithoutQuotes.includes("vmin") ||
      valueWithoutQuotes.includes("vmax") ||
      valueWithoutQuotes.includes("%");
    console.log(Number.parseFloat(valueWithoutQuotes));

    return `${name}: ${isQuotesNeeded ? `"${valueWithoutQuotes}"` : value},`;
  };
};

const useCustomCss = ({ workspace }) => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    const customCssRules = localStorage.getItem("customCssRules");
    if (customCssRules) {
      setRules(JSON.parse(customCssRules));
    } else {
      setRules(initialCustomRules);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("customCssRules", JSON.stringify(rules));
  }, [rules]);

  useEffect(() => {
    if (!workspace) return;

    const customCssRulesCallback = () => {
      const result = [];
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        result.push({
          kind: "BLOCK",
          type: `custom_css_${rule.name}`,
        });
      }

      return result;
    };

    workspace.registerToolboxCategoryCallback(
      "CUSTOM_CSS",
      customCssRulesCallback
    );
  }, [workspace, rules]);

  useEffect(() => {
    for (let i = 0; i < rules.length; i++) {
      defineBlocklyRule(rules[i]);
    }
    console.log(Blockly.React);
  }, [rules, workspace]);

  const onRuleAdd = (rule) => {
    //check if exists, then update
    const ruleIndex = rules.findIndex((r) => r.name === rule.name);
    if (ruleIndex !== -1) {
      const newRules = [...rules];
      newRules[ruleIndex] = rule;
      setRules(newRules);
    } else {
      setRules((prevRules) => [...prevRules, rule]);
    }
  };

  return { onRuleAdd };
};

export default useCustomCss;
