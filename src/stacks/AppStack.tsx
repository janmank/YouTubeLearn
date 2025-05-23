import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, SearchScreen, VideoDetailScreen } from "../screens";
import { Home, Search } from "lucide-react-native";
import { IYouTubeVideoItem } from "../interfaces";

export type RootStackParamList = {
  Tabs: undefined;
  VideoDetail: { video: IYouTubeVideoItem };
};

export type TabStackParamList = {
  Home: undefined;
  Search: { query: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => (
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

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={TabNavigator} />
    <Stack.Screen name="VideoDetail" component={VideoDetailScreen} />
  </Stack.Navigator>
);

export default AppStack;
