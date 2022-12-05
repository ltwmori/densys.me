import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api";

export const getPatients = () =>
  axios.get(`${baseURL}/patients/`);

  export const updatePatient = (id, birth_date, iin, patient_id, name, surname, middle_name, blood_group, contact_number, email, address, marital_status, registration_date) => {
    return axios
      .put(`${baseURL}/patients/${id}/`, {birth_date, iin, patient_id, name, surname, middle_name, blood_group, contact_number, email, address, marital_status, registration_date})
      .then((res) => res.data);
  };

  // export const getPatientsByid = (id) =>
  // axios.get(`${baseURL}/patients/`, {id});