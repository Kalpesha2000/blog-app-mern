import axios from "axios";

// export const BASE_URL = "http://localhost:3000/api/v1";
export const BASE_URL ="https://blog-app-backend-q0dd.onrender.com/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
