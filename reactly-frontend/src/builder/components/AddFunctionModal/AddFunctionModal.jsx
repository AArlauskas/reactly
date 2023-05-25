import {
  Alert,
  Button,
  CardContent,
  Fade,
  Grid,
  Modal,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AddFunctionModal = ({ isOpen, onAdd, onCancel }) => {
  const [functionName, setFunctionName] = useState("");
  const [functionValue, setFunctionValue] = useState("");

  const onFunctionAdd = () => {
    onAdd({
      name: functionName,
      value: functionValue,
    });
    onCancel();
  };

  const getGeneratedFunction = () => {
    return `function ${functionName}() {
      ${functionValue}
    }`;
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
              <Grid item xs={12}>
                <Alert severity="info">
                  Functions that are defined here cannnot be used in the
                  preview. They can only be used in the final downloaded code.
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Function Name"
                  value={functionName}
                  onChange={(e) => setFunctionName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="Function Value"
                  value={functionValue}
                  onChange={(e) => setFunctionValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <SyntaxHighlighter language="javascript" style={dark}>
                  {getGeneratedFunction()}
                </SyntaxHighlighter>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth onClick={onCancel} variant="contained">
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  disabled={!functionName.length || !functionValue.length}
                  onClick={onFunctionAdd}
                  variant="contained"
                >
                  Add Function
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default AddFunctionModal;
