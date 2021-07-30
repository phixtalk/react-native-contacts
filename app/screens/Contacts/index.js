import { useNavigation, Icon } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../../components/common/Container";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../../assets/theme/colors";

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Ionicons
            style={{ padding: 5, color: "#000" }}
            name="md-menu"
            size={32}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>Hi from Contacts</Text>
    </Container>
  );
};

export default Contacts;
