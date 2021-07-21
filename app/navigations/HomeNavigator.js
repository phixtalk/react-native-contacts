import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from "../constants/routeNames";

const Contacts = () => {
  return (
    <View>
      <Text>Hi from Contacts</Text>
    </View>
  );
};
const ContactDetail = () => {
  return (
    <View>
      <Text>Hi from ContactDetail</Text>
    </View>
  );
};
const CreateContact = () => {
  return (
    <View>
      <Text>Hi from CreateContact</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View>
      <Text>Hi from Settings</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
