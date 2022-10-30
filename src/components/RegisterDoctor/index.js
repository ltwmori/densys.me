import './index.css'; 
import { useState } from 'react';
import { Link } from "react-router-dom";
import { 
    createStyles, 
    Navbar, 
    UnstyledButton, 
    Tooltip, 
    Title, 
    TextInput,
    FileInput,
    Button
} from '@mantine/core';
import {
  IconHome2,
  IconUserPlus,
  IconUserSearch,
  IconSettings
} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: '0 0 60px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: '44px',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    '&, &:hover': {
      borderLeftColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      color: theme.white,
    },
  },
}));

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconUserPlus, label: 'Register User' },
  { icon: IconUserSearch, label: 'Search User' },
  { icon: IconSettings, label: 'Settings' },
];

const linksMockdata = [
  'Register Patient',
  'Register Doctor',
];

const RegisterDoctor = () => {

  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Register User');
  const [activeLink, setActiveLink] = useState('Register Doctor');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
      <UnstyledButton
        onClick={() => {
          if(link.label === "Home") {
            window.location.href='/admin';
          }
          if(link.label === "Search User") {
            window.location.href='/admin/search-patient';
          }
          setActive(link.label)}}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
      >
        <link.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
      
      href="/"
      onClick={(event) => {
        if(link === "Register Patient") {
            window.location.href='/admin/register-patient';
        }        
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

    return (
        <div className='container-d' 
        // style={{border:"solid",display:"flex",flexDirection:"row"}}
        >
        {/* <div style={{width:"25%",border:"solid"}}> */}
        <Navbar height={1350} width={{ sm: 300 }}>
            <Navbar.Section grow className={classes.wrapper}>
                <div className={classes.aside}>
                    {mainLinks}
                </div>
                <div className={classes.main}>
                    <Title order={4} className={classes.title}>
                        {active}
                    </Title>

                    {links}

                    
                </div>
            </Navbar.Section>
        </Navbar>
        {/* </div> */}
        <div className='input-block-d'>
            <TextInput label="Date of birth" placeholder="DD/MM/YYYY" className="paperi" required />
            <TextInput label="IIN number" placeholder="760720302335" className="paperi" required />
            <TextInput label="ID number" placeholder="123456789" className="paperi" required />
            <TextInput label="Name" placeholder="John" className="paperi" required />
            <TextInput label="Surname" placeholder="Smith" className="paperi" required />
            <TextInput label="Middle name" placeholder="Hill" className="paperi"  />
            <TextInput label="Contact number" placeholder="87021235687" className="paperi" required />
            <TextInput label="Department ID" placeholder="1234" className="paperi" required />
            <TextInput label="Specialization details ID" placeholder="1234" className="paperi" />
            <TextInput label="Experience in years" placeholder="5" className="paperi" required />
            <FileInput placeholder="Pick file" label="Photo of the doctor" withAsterisk />
            <TextInput label="Category" placeholder="Highest" className="paperi" required />
            <TextInput label="Price of the appointment" placeholder="10000" className="paperi" required />
            <TextInput label="Schedule details" placeholder="" className="paperi" required />
            <TextInput label="Degree/education" placeholder="MD" className="paperi" required />
            <TextInput label="Rating" placeholder="0-10" className="paperi" required />
            <TextInput label="Address" placeholder="Baker Street 45" className="paperi" required />
            <TextInput label="Homepage url" placeholder="john-smith.com" className="paperi" />

            <Button>Submit</Button>
        </div>
        
        </div>
      );
};

export default RegisterDoctor;