import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Text,
    Container,
    Button,
  } from "@mantine/core";
  import './index.css';
  
  const SignUp = () => {
    return (
        <div className="header">
            <div className="inner-header flex">
                <Container size={420} my={40}>
                    <Title
                        align="center"
                        sx={(theme) => ({
                        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                        fontWeight: 900,
                        })}
                    >
                        Create Account
                    </Title>
                    
                    <Text color="white" size="sm" align="center" mt={8}>
                        Please contact administration staff to create an account if 
                    </Text>
                    <Text color="white" size="sm" align="center">
                        you are a patient or a doctor
                    </Text>
                    
            
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <TextInput label="Email" placeholder="name@densys.me" className="paperi" required />
                        <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        required
                        mt="md"
                        />
                        <PasswordInput
                        label="Confirm Password"
                        placeholder="Your password"
                        required
                        mt="md"
                        />
                        <Button fullWidth mt="xl">
                        Sign up
                        </Button>
                    </Paper>
                </Container>
            </div>
        <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
    );
  };
  
  export default SignUp;
  