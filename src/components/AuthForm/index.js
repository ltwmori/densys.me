import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import RadioButton from "../RadioButtons";
import './index.css';
import AuthContext from "./AuthContext.js";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const { loginUser } = useNavigate(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
    <form onSubmit={handleSubmit}>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>

        <Text color="white" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <a color="white" href="/" className="createAcc">Create Account</a>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <RadioButton />
          <TextInput label="username" placeholder="Johny" className="paperi" required />
          <PasswordInput
            label="password"
            placeholder="Your password"
            required
            // className="paperi"
            mt="md"
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor href="https://mantine.dev/" target="_blank">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    </form>
    </section>
  );
};

export default AuthForm;
