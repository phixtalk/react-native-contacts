import React, { useContext, useState, useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import RegisterComponent from "../../components/Register";
import register, { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import { LOGIN } from "../../constants/routeNames";

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { navigate } = useNavigation();

  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      //here i noticed that the tap on register link only took
      //effect on second tap, this is because the the effect that clears the auth state runs when the screen first comes into focus
      //to fix this, we should run it only when the screen leaves focus, by using a cleanup function, because the code in the clean up function is called when the screen goes out of focus
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error])
  );

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value) {
      if (name === "password") {
        if (value.length < 6) {
          setErrors((prevState) => {
            return {
              ...prevState,
              [name]: "This field needs minimum characters of 6",
            };
          });
        } else {
          setErrors((prevState) => {
            return { ...prevState, [name]: null };
          });
        }
      } else {
        setErrors((prevState) => {
          return { ...prevState, [name]: null };
        });
      }
    } else {
      setErrors((prevState) => {
        return { ...prevState, [name]: "This field is required" };
      });
    }
  };

  const onSubmit = () => {
    //validations

    if (!form.userName) {
      setErrors((prevState) => {
        return { ...prevState, userName: "Please add a username" };
      });
    }
    if (!form.firstName) {
      setErrors((prevState) => {
        return { ...prevState, firstName: "Please add a firstname" };
      });
    }
    if (!form.lastName) {
      setErrors((prevState) => {
        return { ...prevState, lastName: "Please add a lastname" };
      });
    }
    if (!form.email) {
      setErrors((prevState) => {
        return { ...prevState, email: "Please add an email" };
      });
    }
    if (!form.password) {
      setErrors((prevState) => {
        return { ...prevState, password: "Please add a password" };
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      onChange={onChange}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
