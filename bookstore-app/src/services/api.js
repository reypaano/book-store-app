import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // replace with Laravel  if needed
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token
  },
});

export default apiClient;
