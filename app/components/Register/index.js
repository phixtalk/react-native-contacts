import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../../components/common/Container";
import Input from "../../components/common/Input";
import CustomButton from "../../components/common/CustomButton";
import styles from "./styles";
import { LOGIN } from "../../constants/routeNames";

const RegisterComponent = ({ form, onSubmit, onChange, errors }) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require("../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            label={"Username"}
            placeholder="Enter your username"
            onChangeText={(value) => {
              onChange({ name: "userName", value });
            }}
            error={errors.userName}
          />
          <Input
            label={"First Name"}
            placeholder="Enter your firstname"
            onChangeText={(value) => {
              onChange({ name: "firstName", value });
            }}
            error={errors.firstName}
          />
          <Input
            label={"Last Name"}
            placeholder="Enter your lastname"
            onChangeText={(value) => {
              onChange({ name: "lastName", value });
            }}
            error={errors.lastName}
          />
          <Input
            label={"Email"}
            placeholder="Enter your email"
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
            error={errors.email}
          />
          <Input
            label={"Password"}
            placeholder="Enter your password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
            secureTextEntry="true"
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} primary title={"Submit"} />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}
            >
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;