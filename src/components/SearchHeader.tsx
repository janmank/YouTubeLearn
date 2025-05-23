import React from "react";
import { Box, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { letterSpacingPercent } from "../utils";
import { SearchInput } from "../components/shared";

interface ISearchHeaderProps {
  query: string;
  videosNumber: number;
  paddingTop: number;
  selectedSortOption: string;
  onOpenSortModal: () => void;
}

const SearchHeader = ({
  query,
  videosNumber,
  paddingTop,
  selectedSortOption,
  onOpenSortModal,
}: ISearchHeaderProps) => {
  const selectedSortLabel =
    selectedSortOption === "date" ? "Upload date: latest" : "Most popular";

  const allowedQueries = ["react", "react native", "javascript", "typescript"];
  const isQueryValid = allowedQueries.includes(query.toLowerCase());

  return (
    <Box pt={paddingTop + 10}>
      <VStack>
        <SearchInput query={query} />
        {isQueryValid ? (
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
        ) : (
          <HStack py="$3">
            <Text
              fontSize="$2xs"
              fontWeight="$bold"
              letterSpacing={letterSpacingPercent(10, 1)}
            >
              You can search only 4 positions: react, react native, javascript,
              typescript.
            </Text>
          </HStack>
        )}
        <HStack pt="$2" pb="$6" justifyContent="flex-end">
          <Text fontSize="$xs" letterSpacing={letterSpacingPercent(12, 1)}>
            Sort by:
          </Text>
          <Pressable onPress={onOpenSortModal}>
            <Text
              fontSize="$xs"
              fontWeight="$bold"
              letterSpacing={letterSpacingPercent(12, 1)}
            >
              {selectedSortLabel} ▾
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SearchHeader;
