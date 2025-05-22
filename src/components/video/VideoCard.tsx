import { Box, Image, View, Text } from "@gluestack-ui/themed";
import Video, { VideoRef } from "react-native-video";
import { Dimensions, TouchableOpacity } from "react-native";
import { useRef, useState } from "react";
import { IVideoCard } from "../../interfaces";

const VideoCard = ({ video }: { video: IVideoCard }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const background = require("./../../assets/video/broadchurch.mp4");
  return (
    <Box width={300} mr="$5">
      <Box borderRadius="$lg" overflow="hidden" width="100%" height={200}>
        {!isPlaying ? (
          <TouchableOpacity onPress={() => setIsPlaying(true)}>
            <Image
              source={{ uri: video.thumbnail }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
              alt={video.title}
            />
          </TouchableOpacity>
        ) : (
          <Video
            source={background}
            style={{ width: "100%", height: 200 }}
            resizeMode="cover"
            controls
            paused={!isPlaying}
          />
        )}
      </Box>
      <Text
        mt="$2"
        fontSize="$xs"
        fontWeight="$medium"
        color="$primary"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {video.title}
      </Text>
      <Box mt="$1" flexDirection="row" justifyContent="flex-end">
        <Text fontSize="$2xs" color="$primary">
          {video.publishDate}
        </Text>
      </Box>
    </Box>
  );
};

export default VideoCard;
