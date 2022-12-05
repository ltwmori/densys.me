// import './index.css';
import {
  Navbar,
  Title,
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Menu,
  ScrollArea,
} from "@mantine/core";
<<<<<<< HEAD
import { IconPencil, IconSearch, IconDots } from "@tabler/icons";
=======
import { IconPencil, IconSearch, IconEye } from "@tabler/icons";
>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278

const data = [
  {
    name: "George Kile",
    department_id: 234,
    email: "doctor-kile@gmail.com",
    rating: 8,
    price: "80$/hr",
  },
  {
    name: "Ben Jordan",
    department_id: 49,
    email: "ben-neurologist@gmail.com",
    rating: 9,
    price: "100$/h",
  },
];

const SearchDoctor = () => {
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
        <Text size="sm">{item.department_id}</Text>
        <Text size="xs" color="dimmed">
          Department ID
        </Text>
      </td>
      <td>
        <Text size="sm">{item.email}</Text>
        <Text size="xs" color="dimmed">
          Email
        </Text>
      </td>
      <td>
        <Text size="sm">{item.rating}</Text>
        <Text size="xs" color="dimmed">
          Rating
        </Text>
      </td>
      <td>
        <Text size="sm">{item.price}</Text>
        <Text size="xs" color="dimmed">
          Price
        </Text>
      </td>

      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil size={16} stroke={1.5} />
          </ActionIcon>
<<<<<<< HEAD
          <Menu transition="pop" withArrow position="bottom-end">
=======
          <ActionIcon>
            <IconEye size={16} stroke={1.5} />
          </ActionIcon>
          {/* <Menu transition="pop" withArrow position="bottom-end">
>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278
            <Menu.Target>
              <ActionIcon>
                <IconDots size={16} stroke={1.5} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconSearch size={16} stroke={1.5} />}>
                See profile
              </Menu.Item>
            </Menu.Dropdown>
<<<<<<< HEAD
          </Menu>
=======
          </Menu> */}
>>>>>>> 4f76df49ccc7670153255f5244a25da08930a278
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

export default SearchDoctor;
