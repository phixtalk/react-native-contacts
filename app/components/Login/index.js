import React, { useState } from "react";
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
import { REGISTER } from "../../constants/routeNames";
import Message from "../common/Message";

const Index = ({ onSubmit, onChange, error, loading }) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <SafeAreaView>
        <Image
          height={70}
          width={70}
          source={require("../../../assets/images/logo.png")}
          style={styles.logoImage}
        />
        <View>
          <Text style={styles.title}>Welcome to RNContacts</Text>
          <Text style={styles.subTitle}>Please login here</Text>

          <View style={styles.form}>
            {/* {remote error: error from server response} */}
            {error && !error.error && (
              <Message danger message="invalid credentials" />
            )}

            {/* {local error: unable to connect to the server} */}
            {error?.error && <Message danger message={error?.error} />}

            <Input
              label={"Username"}
              placeholder="Enter your username"
              onChangeText={(value) => {
                onChange({ name: "userName", value });
              }}
            />

            <Input
              label={"Password"}
              placeholder="Enter your password"
              icon={
                <TouchableOpacity
                  onPress={() => setIsSecureEntry((prev) => !prev)}
                >
                  <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
                </TouchableOpacity>
              }
              secureTextEntry={isSecureEntry}
              iconPosition="right"
              onChangeText={(value) => {
                onChange({ name: "password", value });
              }}
            />
            <CustomButton
              loading={loading}
              disabled={loading}
              onPress={onSubmit}
              primary
              title={"Submit"}
            />

            <View style={styles.createSection}>
              <Text style={styles.infoText}>Need a new account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(REGISTER);
                }}
              >
                <Text style={styles.linkBtn}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default Index;
