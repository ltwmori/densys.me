import "./index.css";
import { TextInput, Button, Text} from "@mantine/core";

const RegisterPatient = () => {
  return (
    <div className="input-block">
      <Text size="xl">Adding a patient</Text>

      <TextInput
        label="Date of birth"
        placeholder="DD/MM/YYYY"
        className="paperi"
        required
      />
      <TextInput
        label="IIN number"
        placeholder="760720302335"
        className="paperi"
        required
      />
      <TextInput
        label="ID number"
        placeholder="123456789"
        className="paperi"
        required
      />
      <TextInput label="Name" placeholder="John" className="paperi" required />
      <TextInput
        label="Surname"
        placeholder="Smith"
        className="paperi"
        required
      />
      <TextInput label="Middle name" placeholder="Hill" className="paperi" />
      <TextInput
        label="Blood group"
        placeholder="A"
        className="paperi"
        required
      />
      <TextInput
        label="Emergency contact number"
        placeholder="87021235687"
        className="paperi"
        required
      />
      <TextInput
        label="Email"
        placeholder="john.smith@gmail.com"
        className="paperi"
      />
      <TextInput
        label="Address"
        placeholder="Baker street 45"
        className="paperi"
        required
      />
      <TextInput
        label="Marital status"
        placeholder="Married"
        className="paperi"
        required
      />
      <TextInput
        label="Registration date"
        placeholder="DD/MM/YYYY"
        className="paperi"
        required
      />
      <TextInput label="Optional details" placeholder="" className="paperi" />

      <Button>Submit</Button>
    </div>
  );
};

export default RegisterPatient;
