import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SearchScreen } from "../screens";

export type AppStackParamList = {
  Home: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
