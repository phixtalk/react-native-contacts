import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigation";

const AppNavController = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavController;
