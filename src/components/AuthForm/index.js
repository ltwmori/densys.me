import React from "react";
import "./index.css";

const LoginForm = () => {
  return (
    <div className="container">
      <div className="blueRec">
        <h2 className="company-name">DenSys.Me</h2>
        <h1 className="login">Let us take care of you.</h1>
        <h3 className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </h3>
      </div>
      <div className="whiteRec">
        <h1 className="login-black">Login</h1>
        <h2 className="login-descr">Please log in before using our services.</h2>
      </div>
    </div>
  );
};

export default LoginForm;
