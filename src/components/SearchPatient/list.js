import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api";

export const getPatients = () =>
  axios.get(`${baseURL}/patients/`);

  export const updatePatients = (id) =>
  axios.post(`${baseURL}/patients/`, { id }).then((res) => res.data);