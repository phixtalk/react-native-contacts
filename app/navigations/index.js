import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigation";
import { GlobalContext } from "../context/Provider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

const AppNavController = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      setAuthLoaded(true);
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isLoggedIn || isAuthenticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavController;
