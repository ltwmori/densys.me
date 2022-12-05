import React from "react";
import {
    Autocomplete,
    Card,
    Text,
    Button,
    createStyles,
    Avatar,
    HoverCard,
    Group,
    Center,
    Dialog,
    TextInput,
    Pagination,
    Datepicker
} from '@mantine/core';
import {
    IconDotsVertical,
    IconChevronDown
} from "@tabler/icons";
import { getAppointments, addAppointment, getAppointmentsTime } from "./api";
import { useState, useEffect, useParams } from "react";

const timeslots = [
    [0, '09:00 - 09:30'],
    [1, '10:00 - 10:30'],
    [2, '11:00 - 11:30'],
    [3, '12:00 - 12:30'],
    [4, '13:00 - 13:30'],
    [5, '14:00 - 14:30'],
    [6, '15:00 - 15:30'],
    [7, '16:00 - 16:30'],
    [8, '17:00 - 17:30'],
];

const useStyles = createStyles((theme) => ({
    card: {
        width: '100%',
        margin: '2rem',
        backgroundColor: 'pink'
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
    },

    button: {
        alignSelf: "flex-end",
        height: "25px",
        justifySelf: "flex-end",
    },

    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        textAlign: "center",
        borderRadius: theme.radius.md,
        height: 93,
        width: 750,
        margin: 15,
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        transition: "box-shadow 150ms ease, transform 100ms ease",

        // "&:hover": {
        //   boxShadow: `${theme.shadows.md} !important`,
        //   transform: "scale(1.05)",
        // },
    },

    search: {
        width: 300,
        marginBottom: 10
    },

    doctorinfo: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
        width: 600,
        alignItems: 'flex-start'
    },

    dates: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 50
    },

    datenames: {
        display: 'flex',
        justifyContent: 'space-between',
        // height: 50,
        width: 145
    }
}));

const MakeAppoinments = () => {
    const { classes, theme } = useStyles();
    const [value, setValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [opened, setOpened] = useState(false);
    const [val, onChange] = useState(new Date());
    const [success, setSuccess] = useState(false);

    const [appointment, setAppointment] = useState();
    const [timeslot, setTimeslot] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(0);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getAppointments()
            .then(response => {
                setAppointment(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    //const navigate = useNavigate();

    const handleClick = () => {
        addAppointment(appointment.doctor_name, appointment.doctor_surname, appointment.speciality, timeslot, val, name, surname, email).then((res) => {
            if (res && res.length) {
                setSuccess(true);
            }
        }).catch((err) => {
            console.log(err);
        })
        //  navigate("/patient");
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    const data = appointment.map(data => data.name).concat(appointment.map(data => data.speciality)).filter(onlyUnique);
    // const unique = data.filter(onlyUnique);

    const items = appointment.filter(
        function (e) {
            if (searchValue == '') return e;
            return new RegExp(searchValue, 'i').test(e.name) || new RegExp(searchValue, 'i').test(e.speciality);
        })
        // .filter(data => new RegExp(searchValue, 'i').test(data.name))
        .map((item) => (
            <Card shadow="sm" p="lg" radius="md" withBorder key={item.id} className={classes.item}>
                <Avatar size={40} src={item.avatar} radius={40} />
                <div className={classes.doctorinfo}>
                    <Text fw={500} size="xs" mb="md">
                        Name: {item.name}
                    </Text>
                    <Text fw={500} size="xs" mb="md">
                        <a href="/patient/specialization">
                            Specialization: {item.speciality}
                        </a>

                    </Text>
                </div>
                <HoverCard
                    width={400}
                    position="bottom"
                    radius="md"
                    shadow="md"
                    withinPortal
                >
                    <HoverCard.Target >
                        <Center inline>
                            <Text fw={500} size="xs" mb="md">
                                Choose available time
                            </Text>
                            <IconChevronDown
                                size={16}
                                color={theme.fn.primaryColor()}
                            />
                        </Center>
                    </HoverCard.Target>
                    
                    <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                        <div className={classes.datenames}>
                            <Text fw={700} size="xs" mb="md" weight={500}>Date</Text>
                            <Text fw={700} size="xs" mb="md" weight={500}>Time</Text>
                        </div>
                        
                            <div className={classes.dates}>
                                {/* <Calendar onChange={onChange} value={val} /> */}
                                <Text fw={500} size="xs" mb="md"> {value} </Text>
                                <Button disabled={buttonDisabled === true} onClick={() => [setOpened((o) => !o)]}>Make appointment</Button>
                            </div>
                        
                    </HoverCard.Dropdown>
                </HoverCard>
                <Dialog
                    position={{ top: 220, left: 440 }}
                    opened={opened}
                    withCloseButton
                    onClose={() => setOpened(false)}
                    size="lg"
                    radius="md"
                >
                    <div>
                        <TextInput size="xs"
                            label="Name"
                            placeholder="John"
                            className="paperi"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <TextInput size="xs"
                            label="Surname"
                            placeholder="Smith"
                            className="paperi"
                            required
                            onChange={(e) => setSurname(e.target.value)}
                            value={surname}
                        />
                        <TextInput size="xs"
                            label="Email"
                            placeholder="john.smith@gmail.com"
                            className="paperi"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        {
                            success && <Text>Success</Text>
                        }
                        <div style={{ marginTop: 10 }}>
                            <Button onClick={(e) => [setOpened(false), handleClick(e)]}>Send</Button>
                        </div>
                    </div>
                </Dialog>
            </Card>
        ));

    // const handle = () => {
    //     console.log(appointment.filter(data => data.name.includes('A')))
    // }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Autocomplete
                className={classes.search}
                value={searchValue}
                onChange={value => setSearchValue(value)}
                placeholder="Enter doctor name or specialization"
                data={data}

            />
            {/* {console.log(searchValue)} */}
            {items}

            <Pagination
                style={{ margin: 15 }}
                size="sm"
                total={10}
                position="center"
                styles={(theme) => ({
                    item: {
                        '&[data-active]': {
                            backgroundImage: theme.fn.gradient({ from: 'blue', to: 'blue' }),
                        },
                    },
                })}
            />
        </div>

    );
};

export default MakeAppoinments;