import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  View,
} from "react-native";

import Icon from "../../components/common/Icon";

import Container from "../../components/common/Container";
import { SETTINGS } from "../../constants/routeNames";
import logoutUser from "../../context/actions/auth/logoutUser";
import styles from "./styles";

const SideMenu = ({ navigation, authDispatch }) => {
  const handleLogout = () => {
    navigation.toggleDrawer();

    Alert.alert("Logout!", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Ok",
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Icon name="player-settings" type="fontisto" size={17} />,
      name: "Settings",
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon name="logout" type="material" size={17} color="black" />,
      name: "Logout",
      onPress: handleLogout,
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require("../../../assets/images/logo.png")}
          style={styles.logoImage}
        />

        <View style={{ paddingHorizontal: 70 }}>
          {menuItems.map(({ name, icon, onPress }) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}> {name} </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
