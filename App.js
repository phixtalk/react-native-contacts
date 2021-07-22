import "react-native-gesture-handler";
import React from "react";
import AppNavController from "./app/navigations";
import GlobalProvider from "./app/context/Provider";

export default function App() {
  return (
    <GlobalProvider>
      <AppNavController />
    </GlobalProvider>
  );
}
