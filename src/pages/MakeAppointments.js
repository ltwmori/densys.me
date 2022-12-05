import React from "react";
import { 
    Autocomplete,
    Card,
    Text,
    Button,
    createStyles,
    Avatar,
    HoverCard,
    Select,
    Center,
    Dialog,
    TextInput,
    Pagination
} from '@mantine/core';
import {
    IconDotsVertical,
    IconChevronDown
} from "@tabler/icons";
import { useState } from 'react';

const mockdata = [
    {
      id: "1",
      name: "Azamat Maratovich",
      specialization: "Anesthesiology",
      available_dates: [
        {
            date: "12/12/2021",
            time: "12:00"
        },
        {
            date: "12/12/2021",
            time: "16:00"
        },
        {
            date: "15/12/2021",
            time: "10:00"
        }
        ],
    },
    {
        id: "2",
        name: "Feruza Nurgazy",
        specialization: "Neurology",
        available_dates: [
          {
              date: "15/12/2021",
              time: "11:00"
          },
          {
              date: "16/12/2021",
              time: "16:00"
          },
          {
              date: "17/12/2021",
              time: "10:00"
          }
          ],
      },
      {
        id: "3",
        name: "Yerbol Yermekov",
        specialization: "Surgery",
        available_dates: [
          {
              date: "15/12/2021",
              time: "11:00"
          },
          {
              date: "16/12/2021",
              time: "16:00"
          },
          {
              date: "17/12/2021",
              time: "10:00"
          }
          ],
      },
      {
        id: "4",
        name: "Asiya Erzhanova",
        specialization: "Cardiology",
        available_dates: [
          {
              date: "15/12/2021",
              time: "11:00"
          },
          {
              date: "16/12/2021",
              time: "16:00"
          },
          {
              date: "17/12/2021",
              time: "10:00"
          }
          ],
      },
      {
        id: "5",
        name: "Alfia Akmetzhaneva",
        specialization: "Pediatrics",
        available_dates: [
          {
              date: "20/12/2021",
              time: "11:00"
          },
          {
              date: "12/12/2021",
              time: "11:00"
          },
          {
              date: "15/12/2021",
              time: "09:00"
          }
          ],
      },
      {
        id: "6",
        name: "Asset Kasym",
        specialization: "Pediatrics",
        available_dates: [
          {
              date: "13/12/2021",
              time: "10:00"
          },
          {
              date: "14/12/2021",
              time: "11:00"
          },
          {
              date: "15/12/2021",
              time: "09:00"
          }
          ],
      },
      {
        id: "7",
        name: "Erlan Temir",
        specialization: "Surgery",
        available_dates: [
          {
              date: "20/12/2021",
              time: "11:00"
          },
          {
              date: "12/12/2021",
              time: "11:00"
          },
          {
              date: "15/12/2021",
              time: "09:00"
          }
          ],
      },
      {
        id: "8",
        name: "Assem Arlan",
        specialization: "Cardiology",
        available_dates: [
          {
              date: "20/12/2021",
              time: "11:00"
          },
          {
              date: "12/12/2021",
              time: "11:00"
          },
          {
              date: "15/12/2021",
              time: "09:00"
          }
          ],
      },
]

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
        display:'flex', 
        flexDirection:'column',
        marginLeft: 20,
        width:600,
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
    },

    select: {
        marginLeft:'1rem',
        // marginTop: '2.3rem',
        width: '20%'
    },

    container: {
        marginTop:'-2.5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    searchbox: {
        marginTop:'3rem',
        display:'flex', 
        flexDirection:'column',
        alignItems:'center', 
        width:'75%'
    }
  }));

const MakeAppoinments = () => {
    const { classes, theme } = useStyles();
    const [selectValue, setSelectValue] = useState('view all');
    const [searchValue, setSearchValue] = useState('');
    const [opened, setOpened] = useState(false);
    // const data =
    // value.trim().length > 0 && !value.includes('@')
    //   ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${value}@${provider}`)
    //   : [];

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

    const data = mockdata.map(data => data.name).concat(mockdata.map(data => data.specialization)).filter(onlyUnique);
    // const unique = data.filter(onlyUnique);

    const items = mockdata.filter(
        function (e) {
            console.log(selectValue)
            if(searchValue == '' && (selectValue == 'view all'||selectValue == '')) {
                return e;
            } else if(searchValue == '' && selectValue != 'view all') {
                return new RegExp(selectValue, 'i').test(e.specialization)
            } else if(searchValue != '' && selectValue == 'view all') {
                return new RegExp(searchValue, 'i').test(e.name) || new RegExp(searchValue, 'i').test(e.specialization);
            } else if(searchValue != '' && selectValue != 'view all') {
                return new RegExp(searchValue, 'i').test(e.name) 
                && new RegExp(selectValue, 'i').test(e.specialization);
            }
    // }).filter(
    //     function (e) {
    //         if(searchValue != '' && selectValue != 'view all') {
    //             // return new RegExp(searchValue, 'i').test(e.name) 
    //             new RegExp(selectValue, 'i').test(e.specialization);
    //         } else {
    //             return e;
    //         }
        }
    )
    // .filter(data => new RegExp(searchValue, 'i').test(data.name))
    .map((item) => (
        <Card shadow="sm" p="lg" radius="md" withBorder key={item.id} className={classes.item}>
          <Avatar size={40} src={item.avatar} radius={40} />
          <div className={classes.doctorinfo}>
            <Text fw={500} size="xs" mb="md">
                 Name: {item.name}
            </Text>
            <Text fw={500} size="xs" mb="md">
                {/* <a href="/patient/specialization"> */}
                    Specialization: {item.specialization}
                {/* </a> */}
                 
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
                {item.available_dates.map((date) => (
                    <div className={classes.dates}>
                        <Text fw={500} size="xs" mb="md">{date.date}</Text>
                        <Text fw={500} size="xs" mb="md">{date.time}</Text>
                        <Button onClick={() => setOpened((o) => !o)}>Make appointment</Button>
                    </div>
                    ))}
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
                />
                <TextInput size="xs"
                    label="Surname"
                    placeholder="Smith"
                    className="paperi"
                    required
                />
                <TextInput size="xs"
                    label="Email"
                    placeholder="john.smith@gmail.com"
                    className="paperi"
                    required
                />
                <div style={{marginTop:10}}>
                    <Button onClick={() => setOpened(false)}>Send</Button>
                </div>
                </div>
            </Dialog>
        </Card>
    ));  

    const handle = () => {
        console.log(mockdata.filter(data => data.name.includes('A')))
    }

    return (
        <div className={classes.container}>
            <div className={classes.select}>
                <Text fw={700} size="lg" mb="md">
                    Make Appointment
                </Text>
                <Select 
                    style={{marginTop:'1rem'}}
                    defaultValue={'View All'} 
                    // label="View Specialization Options"
                    placeholder="View Specialization Options"
                    data={[
                        { value: 'anesthesiology', label: 'Anesthesiology' },
                        { value: 'dermatology', label: 'Dermatology' },
                        { value: 'neurology', label: 'Neurology' },
                        { value: 'pediatrics', label: 'Pediatrics' },
                        { value: 'psychiatry', label: 'Psychiatry' },
                        { value: 'surgery', label: 'Surgery' },
                        { value: 'pediatrics', label: 'Pediatrics' },
                        { value: 'cardiology', label: 'Cardiology' },
                        { value: 'view all', label: 'View All' },
                    ]}
                    onChange={(value) => setSelectValue(value)}
                />
            </div>
            <div className={classes.searchbox} >
                <Autocomplete clearable
                    className={classes.search}
                    value={searchValue}
                    onChange={value => setSearchValue(value)}
                    placeholder="Enter doctor name or specialization"
                    data={data}

                />
                {/* {console.log(searchValue)} */}
                {items}

                {/* <Pagination
                    style={{margin:15}}
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
                    /> */}
            </div>
        </div>
        

    );
};

export default MakeAppoinments;