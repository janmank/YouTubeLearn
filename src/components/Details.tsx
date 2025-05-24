import { VStack, Text, HStack, Box } from "@gluestack-ui/themed";
import { IVideoStats, IYouTubeVideoItem } from "../interfaces";
import { letterSpacingPercent } from "../utils";
import { StatButton } from "./shared";
import { useState, useEffect } from "react";
import { fetchVideoStats } from "../services/api";

interface Props {
  video: IYouTubeVideoItem;
}

const Details = ({ video }: Props) => {
  const { description } = video.snippet;
  const [videoStats, setVideoStats] = useState<IVideoStats | null>(null);
  useEffect(() => {
    const loadStats = async () => {
      const id = video.id.videoId;
      const stats = await fetchVideoStats(id);
      setVideoStats(stats);
    };

    loadStats();
  }, [video]);

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
          Statistics
        </Text>
        <HStack justifyContent="space-between">
          <StatButton
            icon="views"
            label={`${videoStats?.views ?? "–"} views`}
          />
          <StatButton
            icon="likes"
            label={`${videoStats?.likes ?? "–"} likes`}
          />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Details;
