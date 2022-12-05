import "./index.css";
import { TextInput, Button, Text} from "@mantine/core";
import { getPatients, getPatientsByid, updatePatient } from "./edit";
import { useState, useEffect, useParams } from "react";
import { useNavigate } from "react-router-dom";

const EditPatient = () => {
    const navigate = useNavigate();
    const [id, setid] = useState('');
    const [birth_date, setbirth] = useState('');
    const [iin, setiin] = useState('');
    const [patient_id, setpatient] = useState('');
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [middle_name, setmiddle] = useState('');
    const [blood_group, setblood] = useState('');
    const [contact_number, setcontact] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [marital_status, setmarital] = useState('');
    const [registration_date, setreg] = useState('');

  useEffect(() => {
    setid(localStorage.getItem('id'));
    setbirth(localStorage.getItem('birth_date'));
    setiin(localStorage.getItem('iin'));
    setpatient(localStorage.getItem('patient_id'));
    setname(localStorage.getItem('name'));
    setsurname(localStorage.getItem('surname'));
    setmiddle(localStorage.getItem('middle_name'));
    setblood(localStorage.getItem('blood_group'));
    setcontact(localStorage.getItem('contact_number'));
    setemail(localStorage.getItem('email'));
    setaddress(localStorage.getItem('address'));
    setmarital(localStorage.getItem('marital_status'));
    setreg(localStorage.getItem('registration_date'));
    }, []);

    const handleSubmit = () => {
      updatePatient(id, birth_date, iin, patient_id, name, surname , middle_name, blood_group, contact_number, email,
        address, marital_status, registration_date)
        .then(({}) => {
          // setSubmitted(true);
          navigate('/admin/search-patient')
        })
        .catch(() => console.log("a"));
    };

  return (
    <div className="input-block">
      <Text size="xl">Edit a patient</Text>

      <TextInput
        name="birth_date"
        label="Date of birth"
        placeholder="YYYY-MM-DD"
        className="paperi"
        required
        onChange={(e) => setbirth(e.target.value)}
        value={birth_date}
      />
      <TextInput
        name = "iin"
        label="IIN number"
        placeholder="760720302335"
        className="paperi"
        required
        onChange={(e) => setiin(e.target.value)}
        value={iin}
      />
      <TextInput
        name = "patient_id"
        label="ID number"
        placeholder="123456789"
        className="paperi"
        required
        onChange={(e) => setpatient(e.target.value)}
        value={patient_id}
      />
      <TextInput name  = "name" label="Name" placeholder="John" className="paperi" required onChange={(e) => setname(e.target.value)}
        value={name}/>
      <TextInput
      name = "surname"
        label="Surname"
        placeholder="Smith"
        className="paperi"
        required
        onChange={(e) => setsurname(e.target.value)}
        value={surname}
      />
      <TextInput name = "middle_name" label="Middle name" placeholder="Hill" className="paperi" onChange={(e) => setmiddle(e.target.value)}
        value={middle_name}/>
      <TextInput name = "blood_group" label="Blood group" placeholder="A" className="paperi"
        required onChange={(e) => setblood(e.target.value)} value={blood_group}/>
      <TextInput
      name = "contact_number"
        label="Emergency contact number"
        placeholder="87021235687"
        className="paperi"
        required
        onChange={(e) => setcontact(e.target.value)}
        value={contact_number}
      />
      <TextInput
      name = "email"
        label="Email"
        placeholder="john.smith@gmail.com"
        className="paperi"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />
      <TextInput
      name = "address"
        label="Address"
        placeholder="Baker street 45"
        className="paperi"
        required
        onChange={(e) => setaddress(e.target.value)}
        value={address}
      />
      <TextInput
      name = "marital_status"
        label="Marital status"
        placeholder="Married"
        className="paperi"
        required
        onChange={(e) => setmarital(e.target.value)}
        value={marital_status}
      />
      <TextInput
      name = "registration_date"
        label="Registration date"
        placeholder="DD/MM/YYYY"
        className="paperi"
        required
        onChange={(e) => setreg(e.target.value)}
        value={registration_date}
      />
      {/* <TextInput label="Optional details" placeholder="" className="paperi" /> */}
      <Button onClick={handleSubmit} >Submit</Button>
    </div>
  );
};

export default EditPatient;
