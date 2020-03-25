import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black"
      },
      headerTintColor: "#FFFFFF",
      headerBackTitleVisible: false,
      headerBackImage: () => (
        <Ionicons name="md-arrow-back" color={"white"} size={26} />
      )
    }}
  >
    <Stack.Screen name="Tab" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
