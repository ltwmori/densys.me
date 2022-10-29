// import LoginForm from "./components/AuthForm";
import Background from "./components/Background";
import LoginForm from "./components/AuthForm";
import MyHeader from "./components/Header";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from "./pages/Auth";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
function App() {
  return (
    <>
      <Router>
       
          <Routes>
            {/* Dashboard Routes */}
            <Route path="/main" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/auth" element={<Auth />} />
            {/* <Route path="/" element={<Dashboard />} />
            <Route path="/problems" element={<AllProblems />} /> */}

            {/* Authentication Routes */}
            {/* <Route
              path="/auth"
              element={
                <AuthNotAllowed>
                  <Authentication />
                </AuthNotAllowed>
              }
            />
            <Route
              path="/reset-password"
              element={
                <AuthNotAllowed>
                  <ResetPassword />
                </AuthNotAllowed>
              }
            />
            <Route
              path="/reset-password/change"
              element={<ResetPasswordChange />}
            />
            <Route path="/confirm-email/:key" element={<ConfirmEmail />} /> */}
          </Routes>
       
      </Router>
    </>
  );
}

export default App;
