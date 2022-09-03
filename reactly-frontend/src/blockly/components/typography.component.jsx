import { Typography as MuiTypography } from "@mui/material";

function Typography({ variant, text, modifiers }) {
  return (
    <MuiTypography variant={variant} style={modifiers}>
      {text}
    </MuiTypography>
  );
}

export default Typography;
