import { Box, Spinner, Text } from "@gluestack-ui/themed";

interface ISearchStatusMessageProps {
  loading: boolean;
  videosLength: number;
  showTimeoutMessage: boolean;
  isQueryValid: boolean;
}

const SearchStatusMessage = ({
  loading,
  videosLength,
  showTimeoutMessage,
  isQueryValid,
}: ISearchStatusMessageProps) => {
  if (!isQueryValid) {
    return (
      <Box
        position="absolute"
        top="50%"
        left="50%"
        padding="$4"
        zIndex={999}
        backgroundColor="$secondary"
        borderRadius="$md"
        transform={[{ translateX: -100 }, { translateY: -20 }]}
        maxWidth={220}
      >
        <Text textAlign="center" fontWeight="$bold" color="$white">
          Unsupported query. Try one of: react, react native, javascript,
          typescript.
        </Text>
      </Box>
    );
  }
  if (loading && videosLength === 0 && !showTimeoutMessage) {
    return (
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform={[{ translateX: -20 }, { translateY: -20 }]}
      >
        <Spinner size="large" />
      </Box>
    );
  }

  if (showTimeoutMessage) {
    return (
      <Box
        position="absolute"
        top="50%"
        left="50%"
        padding="$4"
        backgroundColor="$backgroundLight"
        borderRadius="$md"
        transform={[{ translateX: -100 }, { translateY: -20 }]}
        maxWidth={200}
      >
        <Text textAlign="center" fontWeight="$bold">
          Something went wrong. Please try again later.
        </Text>
      </Box>
    );
  }

  if (!loading && videosLength === 0 && !showTimeoutMessage) {
    return (
      <Box
        position="absolute"
        top="50%"
        left="50%"
        padding="$4"
        backgroundColor="$backgroundLight"
        borderRadius="$md"
        transform={[{ translateX: -80 }, { translateY: -20 }]}
        maxWidth={180}
      >
        <Text textAlign="center" fontWeight="$bold">
          No videos found.
        </Text>
      </Box>
    );
  }

  return null;
};

export default SearchStatusMessage;
