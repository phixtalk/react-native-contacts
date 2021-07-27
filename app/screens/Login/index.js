import React, { useContext, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import LoginComponent from "../../components/Login";
import { GlobalContext } from "../../context/Provider";
import { clearAuthState } from "../../context/actions/auth/register";
import login from "../../context/actions/auth/login";

const Login = () => {
  const [form, setForm] = useState({});
  const { navigate } = useNavigation();

  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      login(form)(authDispatch);
    }
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      form={form}
      onChange={onChange}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
