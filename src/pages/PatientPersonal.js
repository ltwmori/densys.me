import React from "react";
import { 
  Autocomplete,
  Card,
  Text,
  Flex,
  createStyles,
  Avatar,
  HoverCard,
  Select,
  Center,
  Dialog,
  TextInput,
  Pagination
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly'
  },

  card1: {
    marginTop:'-2rem',
    width: 550,
    height: 450,
    // backgroundColor:'pink'
  },

  card2: {
    marginTop:'-2rem',
    width: 450,
    height: 400,
    // backgroundColor:'pink'
  }

}))

const PatientPersonal = () => {
  const { classes, theme } = useStyles();
  return (
    <div className={classes.container}>
      <Card shadow="sm" p="lg" radius="md" withBorder className={classes.card1}>
        <Text fw={500} size="lg" mb="md">
          Aliya Askar
        </Text>
        <Text fw={350} size="xs" mb="sm">
          Date of birth: 03/07/1998
        </Text>
        <Text fw={350} size="xs" mb="sm">
          IIN number: 030798459814
        </Text>
        <Text fw={350} size="xs" mb="sm">
          ID number: 9771
        </Text>
        <Text fw={350} size="xs" mb="sm">
          Name: Aliya
        </Text>
        <Text fw={350} size="xs" mb="sm">
          Surname: Askar
        </Text>
        <Text fw={350} size="xs" mb="sm">
          Blood group: A
        </Text>
        <Text fw={350} size="xs" mb="sm">
          Emergency contact number: +7 787 988 56 08
        </Text>
        <Text fw={350} size="xs" mb="sm">
          Email: aliya.askar@gmail.com
        </Text>
        <Text fw={350} size="xs" mb="sm">
          Address: Respublica 24/2 street, Astana, Kazakhstan
        </Text>
        <Text fw={350} size="xs" mb="sm">
          Marital status: married
        </Text>
        <Text fw={350} size="xs" mb="sm">
          Registration date: 10/10/2022
        </Text>

      </Card>
      <Card shadow="sm" p="lg" radius="md" withBorder className={classes.card2}>
        <Text fw={500} size="lg" mb="md">
          Appointments
        </Text>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Full name of the doctor: Azamat Maratovich</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Doctor specialization: anesthesiology</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Date: 11/12/2022</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Time: 16:00</Text>
        </Flex>

        <Text fw={500} size="lg" mb="md"></Text>

        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Full name of the doctor: Asset Kasym</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Doctor specialization: pediatrics</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Date: 16/12/2022</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Time: 09:00</Text>
        </Flex>

        <Text fw={500} size="lg" mb="md"></Text>

        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Full name of the doctor: Feruza Nurgazy</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Doctor specialization: neurology</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Date: 15/12/2022</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Time: 10:00</Text>
        </Flex>
      </Card>
    </div>
  );
};

export default PatientPersonal;