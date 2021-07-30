import React, { useContext, useEffect, useState } from "react";
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";

import LoginComponent from "../../components/Login";
import { GlobalContext } from "../../context/Provider";
import { clearAuthState } from "../../context/actions/auth/register";
import login from "../../context/actions/auth/login";

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const { params } = useRoute();
  const { navigate } = useNavigation();

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({ ...form, userName: params.data.username });
    }
  }, [params]);

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
    setJustSignedUp(false);
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      form={form}
      onChange={onChange}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
