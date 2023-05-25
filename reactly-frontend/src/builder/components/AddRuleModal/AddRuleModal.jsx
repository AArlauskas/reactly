import {
  Button,
  CardContent,
  Fade,
  Grid,
  Modal,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";

const convertToCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

const AddRuleModal = ({ isOpen, onAdd, onCancel }) => {
  const [ruleName, setRuleName] = useState("");
  const [ruleValue, setRuleValue] = useState("");
  const onRuleAdd = () => {
    onAdd({
      name: convertToCamelCase(ruleName),
      value: ruleValue,
    });
    onCancel();
  };

  const isValidReactStyleProperty = () => {
    return CSS.supports(ruleName, ruleValue);
    // return (
    //   ruleName.length &&
    //   ruleValue.length &&
    //   ruleName.indexOf("-") === -1 &&
    //   ruleName.indexOf(" ") === -1 &&
    //   ruleName.indexOf("_") === -1
    // );
  };
  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={isOpen}
      closeAfterTransition
    >
      <Fade timeout={300} in={isOpen}>
        <Paper>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Rule Name"
                  value={ruleName}
                  onChange={(e) => setRuleName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Rule Value"
                  value={ruleValue}
                  onChange={(e) => setRuleValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth onClick={onCancel} variant="contained">
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  disabled={
                    !ruleName.length ||
                    !ruleValue.length ||
                    !isValidReactStyleProperty()
                  }
                  onClick={onRuleAdd}
                  variant="contained"
                >
                  Add Rule
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default AddRuleModal;
