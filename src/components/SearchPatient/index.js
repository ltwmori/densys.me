import './index.css'; 
import { useState } from 'react';
import { 
  createStyles, 
  Navbar, 
  UnstyledButton, 
  Tooltip, 
  Title,
  Avatar, 
  Table, 
  Group, 
  Text, 
  ActionIcon, 
  Menu, 
  ScrollArea} from '@mantine/core';
import {
  IconHome2,
  IconUserPlus,
  IconUserSearch,
  IconSettings,
  IconPencil,
  IconSearch,
  IconDots,
  IconEye,
} from '@tabler/icons';

const data = [
  {
    name: "Mary Gary",
    id_num: 1234,
    email: "marygary@gmail.com",
  },
  {
    name: "John Smith",
    id_num: 5678,
    email: "johnsmith@gmail.com",
  }
]

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
  'Search Patient',
  'Search Doctor',
];

const SearchPatient = () => {

  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Search User');
  const [activeLink, setActiveLink] = useState('Search Patient');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
      <UnstyledButton
        onClick={() => {
          if(link.label === "Home") {
            window.location.href='/admin';
          }
          if(link.label === "Register User") {
            window.location.href='/admin/register-patient';
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
        if(link === "Search Doctor") {
          window.location.href='/admin/search-doctor';
        }  
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} radius={40} />
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Text size="sm">{item.id_num}</Text>
        <Text size="xs" color="dimmed">
          ID number
        </Text>
      </td>
      <td>
        <Text size="sm">{item.email}</Text>
        <Text size="xs" color="dimmed">
          Email
        </Text>
      </td>
      
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon>
              <IconEye size={16} stroke={1.5} onClick={console.log("hi")}/>
          </ActionIcon>
          {/* <Menu transition="pop" withArrow position="bottom-end">
            <Menu.Target>
              <ActionIcon>
                <IconDots size={16} stroke={1.5} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Target>
              
            </Menu.Target> */}
            {/* <Menu.Dropdown> */}
              {/* <Menu.Item icon={<IconSearch size={16} stroke={1.5} />}>See profile</Menu.Item> */}
              {/* <Menu.Item icon={<IconNote size={16} stroke={1.5} />}>Add note</Menu.Item>
              <Menu.Item icon={<IconReportAnalytics size={16} stroke={1.5} />}>Analytics</Menu.Item>
              <Menu.Item icon={<IconTrash size={16} stroke={1.5} />} color="red">
                Terminate contract
              </Menu.Item> */}
            {/* </Menu.Dropdown> */}
          {/* </Menu> */}
        </Group>
      </td>
    </tr>
  ));

    return (
      <div className='container-d' >
        <Navbar height={750} width={{ sm: 300 }}>
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
        <div className='users'>
          <ScrollArea>
            <Table sx={{ minWidth: 800 }} verticalSpacing="md">
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </div>
        
        </div>
      );
};

export default SearchPatient;