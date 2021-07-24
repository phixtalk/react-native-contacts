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

const Index = () => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

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
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          <Input
            label={"Username"}
            value={username}
            placeholder="Enter your username"
          />
          <Input
            label={"First Name"}
            value={username}
            placeholder="Enter your firstname"
          />
          <Input
            label={"Last Name"}
            value={username}
            placeholder="Enter your lastname"
          />
          <Input
            label={"Email"}
            value={username}
            placeholder="Enter your email"
          />
          <Input
            label={"Password"}
            value={password}
            placeholder="Enter your password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
            secureTextEntry="true"
          />
          <CustomButton primary title={"Submit"} />

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

export default Index;
