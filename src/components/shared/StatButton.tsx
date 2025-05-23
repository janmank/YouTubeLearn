import { Button, Text, HStack, Image } from "@gluestack-ui/themed";
import ViewsIcon from "./../../assets/icons/views-icon.png";
import LikesIcon from "./../../assets/icons/likes-icon.png";

interface StatButtonProps {
  icon: "views" | "likes";
  label: string;
  variant?: "primary" | "outline";
  onPress?: () => void;
}

const StatButton = ({
  icon,
  label,
  variant = "primary",
  onPress,
}: StatButtonProps) => {
  return (
    <Button
      h="$10"
      px="$4"
      onPress={onPress}
      bg={variant === "primary" ? "$primary" : "transparent"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="$primary"
      rounded="$xl"
    >
      <HStack alignItems="center" space="xs">
        <Image
          source={icon === "views" ? ViewsIcon : LikesIcon}
          alt="App Logo"
          width={20}
          height={20}
        />

        <Text
          color={variant === "primary" ? "$white" : "$primary"}
          fontWeight="$semibold"
          fontSize="$xs"
        >
          {label}
        </Text>
      </HStack>
    </Button>
  );
};

export default StatButton;
