import React from "react";
import { createDrawerNavigator, DrawerButton } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import { HOME_NAVIGATOR } from "../constants/routeNames";
import SideMenu from "./SideMenu";

const getDrawerContent = (navigation) => {
  return <SideMenu navigation={navigation} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({ navigation }) => getDrawerContent(navigation)}
    >
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
