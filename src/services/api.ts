import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  timeout: 10000,
  headers: { Accept: "application/json" },
  params: { key: import.meta.env.VITE_GOOGLEBOOKS_KEY },
});
