import {
  Button,
  CardContent,
  Fade,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { getTextAnswer } from "../../api/gptApi";

const AddGptModal = ({ isOpen, onAdd, onCancel }) => {
  const [textprompt, setTextprompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onRequestAnswer = () => {
    setIsLoading(true);
    setAnswer("");
    getTextAnswer(textprompt)
      .then((response) => {
        setAnswer(response.data.choices[0].text);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const onAddClick = () => {
    onAdd(answer);
    onCancel();
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
          <CardContent style={{ width: "700px" }}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  label="GPT Prompt"
                  value={textprompt}
                  onChange={(e) => setTextprompt(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <LoadingButton
                  loading={isLoading}
                  fullWidth
                  variant="outlined"
                  onClick={onRequestAnswer}
                >
                  Ask
                </LoadingButton>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">{answer}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  disabled={isLoading}
                  fullWidth
                  variant="outlined"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  disabled={isLoading || !answer.length}
                  fullWidth
                  variant="contained"
                  onClick={onAddClick}
                >
                  Create text input
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default AddGptModal;
