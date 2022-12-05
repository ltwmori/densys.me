import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api";

export const addAppointment = (date, timeslot, patient_name, patient_surname, patient_email, doctor) => {
  return axios
    .post(`${baseURL}/appointment-timeslots/`, { date, timeslot, patient_name, patient_surname, patient_email, doctor }).then((res) => res.data);
};

export const getAppointments = () =>
  axios.get(`${baseURL}/appointment-timeslots/`, {});

  