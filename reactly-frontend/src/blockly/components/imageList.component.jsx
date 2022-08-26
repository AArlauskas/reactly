import { ImageList as MuiImageList } from "@mui/material";

function ImageList({ cols, children }) {
  return <MuiImageList cols={cols}>{children}</MuiImageList>;
}

export default ImageList;
