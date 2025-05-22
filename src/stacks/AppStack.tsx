import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SearchScreen } from "../screens";
import { Home, Search } from "lucide-react-native";

export type AppStackParamList = {
  Home: undefined;
  Search: { query: string };
};

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2B2D42",
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#8D99AE",
          borderTopWidth: 0,
          height: 82,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "400",
        },
        tabBarIcon: ({ color }) => {
          if (route.name === "Home") {
            return <Home color={color} size={32} />;
          } else if (route.name === "Search") {
            return <Search color={color} size={32} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
