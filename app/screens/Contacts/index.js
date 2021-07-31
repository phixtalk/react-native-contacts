import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../../components/common/Container";
import Icon from "../../components/common/Icon";

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon
            type="material"
            style={{ padding: 5, color: "#000" }}
            name="menu"
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
