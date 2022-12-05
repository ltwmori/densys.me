import { AppShell } from "@mantine/core";
import React from "react";
import Appoinments from "../../pages/Appoinments";
import Header from "../Header";
import {DoubleNavbar, DoubleNavbar2} from "./Navbar";
import { useLocation } from "react-router-dom";
import AdminPatients from "../../pages/AdminPatients";
import RegisterPatient from "../RegisterPatient";
import RegisterDoctor from "../RegisterDoctor";
import MakeAppoinments from "../../pages/MakeAppointments";
import PatientPersonal from "../../pages/PatientPersonal";

const ProjectIntros = ({ slug }) => {
  switch (slug) {
    case "appoinments":
      return <Appoinments />;
    case "patients":
      return <RegisterPatient />;
    case "doctors":
      return <RegisterDoctor />;
    default:
      return <AdminPatients />;
  }
};

const ProjectIntros2 = ({ slug }) => {
  switch (slug) {
    case "makeappointment":
      return <MakeAppoinments />;
    default:
      return <PatientPersonal />;
  }
};

const AdminPg = () => {
  const location = useLocation();
  return (
    <AppShell
      padding="md"
      navbar={<DoubleNavbar />}
      header={<Header height={0}>{/* Header content */}</Header>}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <ProjectIntros slug={location.pathname.split("/")[2]} />
    </AppShell>
  );
};

const PatientPg = () => {
  const location = useLocation();
  return (
    <AppShell
      padding="md"
      navbar={<DoubleNavbar2 />}
      header={<Header height={0}>{/* Header content */}</Header>}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {console.log(location.pathname.split("/")[2])}
      <ProjectIntros2 slug={location.pathname.split("/")[2]} />
    </AppShell>
  );
};

export {AdminPg, PatientPg};
