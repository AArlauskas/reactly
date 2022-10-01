import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const downloadZippedProject = (data) =>
  api
    .post("/downloads/zip", data, {
      responseType: "blob",
    })
    .then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);

      // create "a" HTLM element with href to file & click
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", "reactly-project.zip"); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
