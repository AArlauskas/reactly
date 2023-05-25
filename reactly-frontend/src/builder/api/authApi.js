import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "https://reactly-backend.herokuapp.com/api",

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      window.localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);
export const getWebsites = () => api.get("/websites");

export const addWebsite = (data) => api.post("/websites", data);

export const updateWebsite = ({ websiteId, newName }) =>
  api.put(`/websites/rename`, { websiteId, newName });

export const deleteWebsite = (websiteId) =>
  api.delete(`/websites/${websiteId}`);

export const getWebsiteContent = (websiteId) =>
  api.get(`/websites/${websiteId}`);

export const updateWebsiteContent = ({ websiteId, content }) =>
  api.put(`/websites/${websiteId}`, content);
