import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./navigation";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import config from "../gluestack.config";
import { Provider } from "react-redux";
import Store from "./redux/store";
import * as Notifications from "expo-notifications";
import { Platform, Alert } from "react-native";

function App(): React.JSX.Element {
  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       if (status !== "granted") {
  //         Alert.alert(
  //           "Permission required",
  //           "Enable notifications to get reminders."
  //         );
  //       }
  //     }
  //   })();

  //   const subscriptionReceived = Notifications.addNotificationReceivedListener(
  //     (notification) => {
  //       console.log("Notification received:", notification);
  //     }
  //   );

  //   const subscriptionResponse =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log("Notification clicked:", response);
  //     });

  //   return () => {
  //     subscriptionReceived.remove();
  //     subscriptionResponse.remove();
  //   };
  // }, []);

  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </GluestackUIProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
