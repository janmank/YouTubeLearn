import React from "react";
import { Pressable, Icon } from "@gluestack-ui/themed";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      bg="$primary"
      opacity={0.75}
      borderRadius={999}
      p="$2.5"
      alignItems="center"
      justifyContent="center"
      style={{
        width: 32,
        height: 32,
        position: "absolute",
        top: 60,
        left: 20,
        zIndex: 1000,
      }}
    >
      <Icon as={ChevronLeft} size="xl" color="$white" />
    </Pressable>
  );
};

export default BackButton;
