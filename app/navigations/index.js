import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigation";
import { GlobalContext } from "../context/Provider";

const AppNavController = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavController;
