import React, { useEffect, useState } from "react";
import RegisterComponent from "../../components/Register";
import axiosInstance from "../../helpers/axiosInterceptor";

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosInstance.get("/contacts").catch((err) => {
      console.log("err", err.response);
    });
  }, []);

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
    //console.log("form :>>", form);
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
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      onChange={onChange}
    />
  );
};

export default Register;
