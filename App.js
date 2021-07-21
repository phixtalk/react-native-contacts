import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import AppNavController from "./app/navigations";

export default function App() {
  return <AppNavController></AppNavController>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
