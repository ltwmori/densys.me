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
import "./index.css";
// import AuthContext from "./AuthContext.js";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../requests/auth";
import { setTokens } from "../../utils/token";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  // const { loginUser } = useNavigate(AuthContext);
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const username = e.target.username.value;
  //   const password = e.target.password.value;
  //   username.length > 0 && loginUser(username, password);
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    login(loginForm.username, loginForm.password)
      .then(({ access, refresh }) => {
        setTokens(access, refresh);
        navigate("/home");
      })
      .catch(() => setError("Invalid username or password"));
  };

  return (
    <section>
      <form>
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
            <a color="white" href="/sign-up" className="createAcc">
              Create Account
            </a>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <RadioButton />
            <TextInput
              name="username"
              onChange={handleInputChange}
              value={loginForm.username}
              label="Username"
              placeholder="Johny"
              className="paperi"
              required
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              name="password"
              onChange={handleInputChange}
              value={loginForm.password}
              // className="paperi"
              mt="md"
            />
            <Group position="apart" mt="md">
              <Checkbox label="Remember me" />
              <Anchor href="https://mantine.dev/" target="_blank">
                Forgot password?
              </Anchor>
            </Group>
            {error && (
              <Text color="red" size="sm" align="center" mt={5}>
                {error}
              </Text>
            )}
            <Button fullWidth mt="xl" onClick={handleSubmit}>
              Sign in
            </Button>
          </Paper>
        </Container>
      </form>
    </section>
  );
};

export default AuthForm;
