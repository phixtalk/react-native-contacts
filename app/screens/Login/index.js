import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Container from "../../components/common/Container";
import Input from "../../components/common/Input";

const Login = () => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <Container>
      <SafeAreaView>
        <Input
          label={"Username"}
          value={username}
          onChangeText={onChangeUsername}
          error={"This field is required"}
          placeholder="Enter your username"
          keyboardType="text"
        />
        <Input
          label={"Password"}
          value={password}
          onChangeText={onChangePassword}
          placeholder="Enter your password"
          keyboardType="password"
          icon={<Text>HIDE</Text>}
          iconPosition="right"
          secureTextEntry="true"
        />
      </SafeAreaView>
    </Container>
  );
};

export default Login;
