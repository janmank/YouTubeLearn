import React from "react";
import { VStack, Text, Box } from "@gluestack-ui/themed";

interface EmptyListPlaceholderProps {
  title?: string;
  message?: string;
}

const EmptyList = ({
  title = "No Results",
  message = "Try adjusting your search or filter to find what you're looking for.",
}: EmptyListPlaceholderProps) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" py="$10">
      <VStack alignItems="center" space="md">
        <Text fontSize="$lg" fontWeight="$bold" color="$textLight700">
          {title}
        </Text>
        <Text
          textAlign="center"
          fontSize="$sm"
          color="$textLight500"
          px="$8"
          maxWidth={280}
        >
          {message}
        </Text>
      </VStack>
    </Box>
  );
};

export default EmptyList;
