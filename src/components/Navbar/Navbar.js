import { useState } from "react";
import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  Title,
} from "@mantine/core";
import { IconHome2, IconUser, IconCalendar, IconNurse } from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  aside: {
    flex: "0 0 60px",
    marginTop: "20px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  title: {
    boxSizing: "border-box",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: "44px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      color: theme.white,
    },
  },
<<<<<<< HEAD
=======
  link2: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active2: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278
}));

const mainLinksMockdata = [
  { icon: IconHome2, label: "Home", link: "../admin" },
  { icon: IconUser, label: "Patients", link: "../admin/patients" },
  { icon: IconNurse, label: "Doctors", link: "../admin/doctors" },
  { icon: IconCalendar, label: "Appoinments", link: "../admin/appoinments" },
];

const mainLinksMockdata2 = [
<<<<<<< HEAD
  { icon: IconHome2, label: "Home", link: "../patient" },
  { icon: IconCalendar, label: "Appoinments", link: "../patient/makeappointment" },
];

// const linksMockdataPatient = [{icon: IconHome2, label: "Add a patient", link: "../admin/register-patient"}, 
// {icon: IconHome2, label: "Search patients", link: "../admin/search-patient"}];


const linksMockdataPatient = [ "Add a patient",  "Search patients"];
=======
  { icon: IconHome2, label: "Personal Page", link: "../patient" },
  { icon: IconCalendar, label: "Appoinments", link: "../patient/makeappointment" },
  // { icon: IconCalendar, label: "Appoinments", link: "../patient/makeappointment" },
];

// const linksMockdataPatient = ["Add a patient", "Search patients"];
const linksMockdataPatient = [
  {label: "Add a patient", link: "../admin/patients"}, 
  {label: "Search patients", link: "../admin/search-patients"}
]

>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278
const linksMockdataDoctors = [
  "Add a doctor",
  "Search doctors",
  "Display work schedule",
];
const linksDataAppoinments = ["Requests from patients", "Add a new appoinment"];

<<<<<<< HEAD
const linksDataAppoinments2 = ["Make an appointment", "View doctor specializations"];
=======
const linksDataAppoinments2 = ["Make an appointment"];
>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278

const linksDataHome = ["Dashboard"];

const DoubleNavbar = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Home");
  const [activeLinkPatient, setActiveLinkPatient] = useState("Add a patient");
  const [activeLinkDoctor, setActiveLinkDoctor] = useState("Add a doctor");
  const [activeLinkAppoinment, setActiveLinkAppoinment] = useState(
    "Requests from patients"
  );
  const [activeLinkHome, setActiveHome] = useState("Dashboard");
  // const pathUpdate = item => pathname.split("/")[2] !== undefined ? item : pathname + "/" + item;

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={link.label}
    >
      <Link to={link.link}>
        <UnstyledButton
          onClick={() => setActive(link.label)}
          className={cx(classes.mainLink, {
            [classes.mainLinkActive]: link.label === active,
          })}
        >
          <link.icon stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  ));

  const linksPatient = linksMockdataPatient.map((link) => (
<<<<<<< HEAD
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLinkPatient === link,
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLinkPatient(link);
      }}
      key={link}
    >
      {link}
=======
    
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLinkPatient === link.label,
      })}
      href={link.link}
      onClick={(event) => {
        console.log(link.link)
        event.preventDefault();
        setActiveLinkPatient(link.label);
        
        if(link.label == "Search patients") {
          window.location.href='/admin/search-patients';
        }
      }}
      key={link.link}
    >
      {link.label}
>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278
    </a>
  ));

  const linksDoctor = linksMockdataDoctors.map((link) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLinkDoctor === link,
      })}
      href="/"
      onClick={(event) => {
<<<<<<< HEAD
        event.preventDefault();
        setActiveLinkDoctor(link);
=======
        console.log(link.link)
        event.preventDefault();
        setActiveLinkDoctor(link);
        if(link == "Search doctors") {
          window.location.href='/admin/search-doctors';
        }
>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278
      }}
      key={link}
    >
      {link}
    </a>
  ));

  const linksAppoinments = linksDataAppoinments.map((link) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLinkAppoinment === link,
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLinkAppoinment(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  const linksHome = linksDataHome.map((link) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLinkHome === link,
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveHome(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <Navbar height={750} width={{ sm: 300 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>
          {active === "Patients" && linksPatient}
          {active === "Doctors" && linksDoctor}
          {active === "Appoinments" && linksAppoinments}
          {active == "Home" && linksHome}
          {/* {linksPatient} */}
        </div>
      </Navbar.Section>
    </Navbar>
  );
};

const DoubleNavbar2 = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Home");
  const [activeLinkAppoinment, setActiveLinkAppoinment] = useState(
    "Make an appointment"
  );
  const [activeLinkHome, setActiveHome] = useState("Dashboard");
  // const pathUpdate = item => pathname.split("/")[2] !== undefined ? item : pathname + "/" + item;

  const mainLinks = mainLinksMockdata2.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={link.label}
    >
      <Link to={link.link}>
        <UnstyledButton
          onClick={() => setActive(link.label)}
          className={cx(classes.mainLink, {
            [classes.mainLinkActive]: link.label === active,
          })}
        >
          <link.icon stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  ));

  const linksAppoinments = linksDataAppoinments2.map((link) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLinkAppoinment === link,
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLinkAppoinment(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  const linksHome = linksDataHome.map((link) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLinkHome === link,
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveHome(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
<<<<<<< HEAD
    <Navbar height={750} width={{ sm: 300 }}>
=======
    <Navbar height={750} width={{ base: 60 }} >
>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          {mainLinks}
        </div>
        <div className={classes.main}>
<<<<<<< HEAD
          <Title order={4} className={classes.title}>
            {active}
          </Title>
          {active === "Appoinments" && linksAppoinments}
          {active == "Home" && linksHome}
=======
          {/* <Title order={4} className={classes.title}>
            {active}
          </Title>
          {active === "Appoinments" && linksAppoinments}
          {active == "Home" && linksHome} */}
>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278
          {/* {linksPatient} */}
        </div>
      </Navbar.Section>
    </Navbar>
  );
};

<<<<<<< HEAD
=======

>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278
export {DoubleNavbar, DoubleNavbar2};
