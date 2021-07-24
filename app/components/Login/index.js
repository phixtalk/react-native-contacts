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
import { REGISTER } from "../../constants/routeNames";

const Index = () => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const { navigate } = useNavigation();

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
            <Input
              label={"Username"}
              value={username}
              placeholder="Enter your username"
            />
            <Input
              label={"Password"}
              value={password}
              placeholder="Enter your password"
              icon={<Text>HIDE</Text>}
              iconPosition="right"
              secureTextEntry="true"
            />
            <CustomButton primary title={"Submit"} />

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
