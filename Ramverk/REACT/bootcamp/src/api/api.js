import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getLogin = (email, password) => {
  axios.post(`${BASE_URL}/login`, { email, password });
};
