import "./index.css";
import { TextInput, FileInput, Button, Text } from "@mantine/core";
const RegisterDoctor = () => {
  return (
    <div className="input-block-d">
      <Text size="xl">Adding a doctor</Text>
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
        label="Contact number"
        placeholder="87021235687"
        className="paperi"
        required
      />
      <TextInput
        label="Department ID"
        placeholder="1234"
        className="paperi"
        required
      />
      <TextInput
        label="Specialization details ID"
        placeholder="1234"
        className="paperi"
      />
      <TextInput
        label="Experience in years"
        placeholder="5"
        className="paperi"
        required
      />
      <FileInput
        placeholder="Pick file"
        label="Photo of the doctor"
        withAsterisk
      />
      <TextInput
        label="Category"
        placeholder="Highest"
        className="paperi"
        required
      />
      <TextInput
        label="Price of the appointment"
        placeholder="10000"
        className="paperi"
        required
      />
      <TextInput
        label="Schedule details"
        placeholder=""
        className="paperi"
        required
      />
      <TextInput
        label="Degree/education"
        placeholder="MD"
        className="paperi"
        required
      />
      <TextInput
        label="Rating"
        placeholder="0-10"
        className="paperi"
        required
      />
      <TextInput
        label="Address"
        placeholder="Baker Street 45"
        className="paperi"
        required
      />
      <TextInput
        label="Homepage url"
        placeholder="john-smith.com"
        className="paperi"
      />

      <Button>Submit</Button>
    </div>
  );
};

export default RegisterDoctor;
