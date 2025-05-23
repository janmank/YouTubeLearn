import { VStack, Text, HStack, Box } from "@gluestack-ui/themed";
import { IYouTubeVideoItem } from "../interfaces";
import { letterSpacingPercent } from "../utils";
import { StatButton } from "./shared";

interface Props {
  video: IYouTubeVideoItem;
}

const Details = ({ video }: Props) => {
  const { description } = video.snippet;

  return (
    <VStack space="lg" mt="$4">
      <Box>
        <Text
          fontWeight="$semibold"
          fontSize="$xs"
          color="$primary"
          pb="$2"
          letterSpacing={letterSpacingPercent(10, 1)}
        >
          Description
        </Text>
        <Text
          fontSize="$sm"
          color="$primary"
          letterSpacing={letterSpacingPercent(12, 1)}
        >
          {description || "No description available."}
        </Text>
      </Box>

      <Box>
        <Text
          fontWeight="$semibold"
          fontSize="$xs"
          color="$primary"
          pb="$2"
          letterSpacing={letterSpacingPercent(10, 1)}
        >
          Statistic
        </Text>
        <HStack justifyContent="space-between">
          <StatButton icon="views" label="22 views" />
          <StatButton icon="likes" label="23 likes" />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Details;
