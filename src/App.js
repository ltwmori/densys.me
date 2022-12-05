// import LoginForm from "./components/AuthForm";
import Background from "./components/Background";
// import LoginForm from "./components/AuthForm";
import MyHeader from "./components/Header";
import AdminPage from "./components/AdminPage";
import SearchPatient from "./components/SearchPatient";
import SearchDoctor from "./components/SearchDoctor";
import RegisterPatient from "./components/RegisterPatient";
import RegisterDoctor from "./components/RegisterDoctor";
import SignUp from "./components/SignupForm";
import { Route, Routes } from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import {AdminPg, PatientPg} from "./components/Navbar/Appshell";
import AdminPatients from "./pages/AdminPatients";
import Appoinments from "./pages/Appoinments";
import MakeAppoinments from "./pages/MakeAppointments";
import PatientPersonal from "./pages/PatientPersonal";
import Specialization from "./pages/Specialization";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <MyHeader />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Background />} exact />
            <Route path="/home" element={<MainPage />} exact />
            <Route path="/sign-up" element={<SignUp />} exact />
            <Route path="/admin" element={<AdminPg />} exact >
              <Route path="/admin" element={<AdminPatients />} exact />  
              <Route path="/admin/patients" element={<AdminPatients />} exact />
              <Route path="/admin/doctors" element={<AdminPatients />} exact />
              <Route path="/admin/search-patients" element={<AdminPatients />} exact />
              <Route path="/admin/search-doctors" element={<AdminPatients />} exact />
              <Route path="/admin/appoinments" element={<Appoinments />} exact />
            </Route>
            <Route path="/patient" element={<PatientPg />} exact >
              <Route path="/patient" element={<PatientPersonal />} exact />  
              <Route path="/patient/makeappointment" element={<MakeAppoinments />} exact />
              {/* <Route path="/patient/specialization" element={<Specialization />} exact /> */}
            </Route>
            {/* <Route path="/patient/specialization" element={<Specialization />} exact ></Route> */}
            {/* <Route
              path="/admin/search-patient"
              element={<SearchPatient />}
              exact
            />
            <Route
              path="/admin/search-doctor"
              element={<SearchDoctor />}
              exact
            /> */}
            <Route
              path="/admin/register-patient"
              element={<RegisterPatient />}
              exact
            />
            <Route
              path="/admin/register-doctor"
              element={<RegisterDoctor />}
              exact
            />
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
