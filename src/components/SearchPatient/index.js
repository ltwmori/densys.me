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
import { getPatients, updatePatients } from "./list";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SearchPatient = () => {
  
  const [patients, setPatients] = useState([]);


  useEffect(() => { getPatients()
    .then(response => {
    setPatients(response.data);
    })
    .catch(e => {
      console.log(e);
    })
  }, [])
  
    const setData = (patients) => {
      let { id, birth_date, iin, patient_id, name, surname, middle_name, blood_group, contact_number, email, address, marital_status, registration_date } = patients;
          localStorage.setItem('id', id);
          localStorage.setItem('birth_date', birth_date);
          localStorage.setItem('iin', iin);
          localStorage.setItem('patient_id', patient_id);
          localStorage.setItem('name', name);
          localStorage.setItem('surname', surname);
          localStorage.setItem('middle_name', middle_name);
          localStorage.setItem('blood_group', blood_group);
          localStorage.setItem('contact_number', contact_number);
          localStorage.setItem('email', email);
          localStorage.setItem('address', address);
          localStorage.setItem('marital_status', marital_status);
          localStorage.setItem('registration_date', registration_date);
   }

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/admin/edit-patient");
  }

  const rows = patients.map((item) => (
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
        <Text size="sm">{item.patient_id}</Text>
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
            <IconPencil size={16} stroke={1.5} onClick={(e) => [handleClick(e), setData(item)]} />
          </ActionIcon>
          <ActionIcon>
            <IconEye size={16} stroke={1.5} 
            />
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
