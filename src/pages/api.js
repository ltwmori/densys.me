import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api";

export const addAppointment = (date, timeslot, patient_name, patient_surname, patient_email, doctor_name, doctor_surname) => {
  return axios
    .post(`${baseURL}/appointments/`, { date, timeslot, patient_name, patient_surname, patient_email, doctor_name, doctor_surname }).then((res) => res.data);
};

export const getAppointments = () =>
  axios.get(`${baseURL}/appointments/`, {});

  export const getAppointmentsTime = () =>
  axios.get(`${baseURL}/appointment-timeslots/`, {});