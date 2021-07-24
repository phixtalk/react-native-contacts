import React from "react";
import LoginComponent from "../../components/Login";

const Login = () => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return <LoginComponent />;
};

export default Login;
