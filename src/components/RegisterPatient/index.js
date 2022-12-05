import "./index.css";
import { TextInput, Button, Text, Select} from "@mantine/core";
import { patientRegister } from "./register";
import { useState } from "react";

const RegisterPatient = () => {
  const [registerForm, setRegisterForm] = useState({
    birth_date: "",
    iin: "",
    patient_id: "",
    name:"",
    surname: "", 
    middle_name: "",
    blood_group: "",
    contact_number: "",
    email: "",
    address: "",
    marital_status: "",
    registration_date: ""
  });
  const [error, setError] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    patientRegister(registerForm.birth_date, registerForm.iin,registerForm.patient_id, registerForm.name, registerForm.surname , registerForm.middle_name, registerForm.blood_group, registerForm.contact_number, registerForm.email,
      registerForm.address, registerForm.marital_status, registerForm.registration_date)
      .then(({}) => {
        // setSubmitted(true);
      })
      .catch(() => setError("Some invalid fields"));
  };

  return (
    <div className="input-block">
      <Text size="xl">Adding a patient</Text>

      <TextInput
        name="birth_date"
        label="Date of birth"
        placeholder="YYYY-MM-DD"
        className="paperi"
        required
        onChange={handleInputChange}
        value={registerForm.birth_date}
      />
      <TextInput
        name = "iin"
        label="IIN number"
        placeholder="760720302335"
        className="paperi"
        required
        onChange={handleInputChange}
        value={registerForm.iin}
      />
      <TextInput
        name = "patient_id"
        label="ID number"
        placeholder="123456789"
        className="paperi"
        required
        onChange={handleInputChange}
        value={registerForm.patient_id}
      />
      <TextInput name  = "name" label="Name" placeholder="John" className="paperi" required onChange={handleInputChange}
        value={registerForm.name}/>
      <TextInput
      name = "surname"
        label="Surname"
        placeholder="Smith"
        className="paperi"
        required
        onChange={handleInputChange}
        value={registerForm.surname}
      />
      <TextInput name = "middle_name" label="Middle name" placeholder="Hill" className="paperi" onChange={handleInputChange}
        value={registerForm.middle_name}/>
      <TextInput name = "blood_group" label="Blood group" placeholder="A" className="paperi"
        required onChange={handleInputChange} value={registerForm.blood_group}/>
      <TextInput
      name = "contact_number"
        label="Emergency contact number"
        placeholder="87021235687"
        className="paperi"
        required
        onChange={handleInputChange}
        value={registerForm.contact_number}
      />
      <TextInput
      name = "email"
        label="Email"
        placeholder="john.smith@gmail.com"
        className="paperi"
        onChange={handleInputChange}
        value={registerForm.email}
      />
      <TextInput
      name = "address"
        label="Address"
        placeholder="Baker street 45"
        className="paperi"
        required
        onChange={handleInputChange}
        value={registerForm.address}
      />
      <TextInput
      name = "marital_status"
        label="Marital status"
        placeholder="Married"
        className="paperi"
        required
        onChange={handleInputChange}
        value={registerForm.marital_status}
      />
      <TextInput
      name = "registration_date"
        label="Registration date"
        placeholder="DD/MM/YYYY"
        className="paperi"
        required
        onChange={handleInputChange}
        value={registerForm.registration_date}
      />
      {/* <TextInput label="Optional details" placeholder="" className="paperi" /> */}
      {error && (<Text color="red" size="sm" align="center" mt={5}> {error} </Text>
      )}
      <Button onClick={handleSubmit} >Submit</Button>
    </div>
  );
};

export default RegisterPatient;
