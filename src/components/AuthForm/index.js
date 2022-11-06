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

const AuthForm = () => {
  return (
    <>
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
          <a color="white" href="/sign-up" className="createAcc">Create Account</a>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <RadioButton />
          <TextInput label="Email" placeholder="name@densys.me" className="paperi" required />
          <PasswordInput
            label="Password"
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
    </>
  );
};

export default AuthForm;
