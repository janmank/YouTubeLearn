import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

interface IScreenWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  statusBarStyle?: "light" | "dark" | "auto";
}

const ScreenWrapper = ({
  children,
  backgroundColor = "#fff",
  statusBarStyle = "auto",
}: IScreenWrapperProps) => {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar style={statusBarStyle} backgroundColor={backgroundColor} />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
