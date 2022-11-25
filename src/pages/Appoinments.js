import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  Flex,
  Button,
  Group,
} from "@mantine/core";
import React from "react";

const mockdata = [
  {
    id: "1",
    name: "John Doe",
    date: "12/12/2021",
    time: "12:00",
    doctor: "Azamat Maratovich",
  },
  {
    id: "2",
    name: "John Doe",
    date: "12/12/2021",
    time: "12:00",
    doctor: "Azamat Maratovich",
  },
  {
    id: "3",
    name: "John Doe",
    date: "12/12/2021",
    time: "12:00",
    doctor: "Azamat Maratovich",
  },
  {
    id: "5",
    name: "John Doe",
    date: "12/12/2021",
    time: "12:00",
    doctor: "Azamat Maratovich",
  },
  {
    id: "7",
    name: "John Doe",
    date: "12/12/2021",
    time: "12:00",
    doctor: "Azamat Maratovich",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 180,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    // "&:hover": {
    //   boxShadow: `${theme.shadows.md} !important`,
    //   transform: "scale(1.05)",
    // },
  },
}));

const Appoinments = () => {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <Card key={item.id} className={classes.item}>
      <Text fw={500} size="xs" mb="md">
        Appoinment # {item.id}
      </Text>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Full name of the patient: </Text>
          <Text size="xs">{item.name}</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Doctor: </Text>
          <Text size="xs">{item.doctor}</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Date: </Text>
          <Text size="xs">{item.date}</Text>
        </Flex>
        <Flex gap="md" justify="flex-start" align="center" direction="row">
          <Text size="xs">Time: </Text>
          <Text size="xs">{item.time}</Text>
        </Flex>

      <Button className={classes.button}>Approve the appoinment</Button>
    </Card>
  ));

  return (
    <div>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[{ maxWidth: 755, cols: 2, spacing: "xl" }]}
      >
        {items}
      </SimpleGrid>
    </div>
  );
};

export default Appoinments;
