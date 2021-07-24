import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Container from "../../components/common/Container";
import Input from "../../components/common/Input";
import CustomButton from "../../components/common/CustomButton";

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
          placeholder="Enter your username"
        />
        <Input
          label={"Password"}
          value={password}
          onChangeText={onChangePassword}
          placeholder="Enter your password"
          icon={<Text>HIDE</Text>}
          iconPosition="right"
          secureTextEntry="true"
        />
        <CustomButton
          secondary
          title={"Submit"}
          loading={true}
          disabled={true}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Login;
