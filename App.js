import React from "react";
import { Text, View } from "react-native";
import Navigation from "./src/components/Navigation";
import { AuthProvide } from "./src/context/AuthContext";

const App = () => {
  return (
    <AuthProvide>
      <Navigation />
    </AuthProvide>
  )

};

export default App;