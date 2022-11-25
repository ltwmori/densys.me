import "./index.css";
import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";
import { IconPencil, IconEye } from "@tabler/icons";

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
  },
];

const SearchPatient = () => {
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
            <IconEye size={16} stroke={1.5} onClick={console.log("hi")} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <div className="users">
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="md">
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default SearchPatient;
