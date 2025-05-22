import React from "react";
import { Button, Text } from "@gluestack-ui/themed";
import { letterSpacingPercent } from "../../utils";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "outline" | "clean";
  isDisabled?: boolean;
};

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant,
  isDisabled,
}) => {
  return (
    <Button
      h="$12"
      onPress={onPress}
      isDisabled={isDisabled}
      bg={variant === "primary" ? "$primary" : "transparent"}
      borderWidth={variant === "outline" ? 1 : 0}
      rounded="$xl"
    >
      <Text
        color={variant === "primary" ? "$white" : "$amber500"}
        fontWeight="$semibold"
        letterSpacing={letterSpacingPercent(16, 1)}
      >
        {title}
      </Text>
    </Button>
  );
};

export default CustomButton;
