import React from "react";
import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import { letterSpacingPercent } from "../utils";
import { SearchInput } from "../components/shared";

interface ISearchHeaderProps {
  query: string;
  videosNumber: number;
  paddingTop: number;
}

const SearchHeader = ({
  query,
  videosNumber,
  paddingTop,
}: ISearchHeaderProps) => {
  return (
    <Box px="$6" pt={paddingTop + 10}>
      <VStack>
        <SearchInput query={query} />
        <HStack pt="$3">
          <Text fontSize="$2xs" letterSpacing={letterSpacingPercent(10, 1)}>
            {videosNumber} results found for:
          </Text>
          <Text
            fontSize="$2xs"
            fontWeight="$bold"
            letterSpacing={letterSpacingPercent(10, 1)}
          >
            "{query}"
          </Text>
        </HStack>
        <HStack pt="$2" pb="$6" justifyContent="flex-end">
          <Text fontSize="$xs" letterSpacing={letterSpacingPercent(12, 1)}>
            Sort by:
          </Text>
          <Text
            fontSize="$xs"
            fontWeight="$bold"
            letterSpacing={letterSpacingPercent(12, 1)}
          >
            Most Popular
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SearchHeader;
