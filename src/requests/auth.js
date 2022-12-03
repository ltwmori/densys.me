import axios from "axios";
const baseURL = "http://127.0.0.1:8000/auth";

export const login = (username, password) => {
  return axios
    .post(`${baseURL}/login/`, { username, password })
    .then((res) => res.data);
};

export const getToken = (refresh) =>
  axios.post(`${baseURL}/login/refresh/`, { refresh }).then((res) => res.data);
