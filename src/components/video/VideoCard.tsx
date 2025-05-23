import { Box, Image, Text } from "@gluestack-ui/themed";
import Video from "react-native-video";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { IYouTubeVideoItem } from "../../interfaces";
import { useFormattedDate } from "../../hooks";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../stacks/AppStack";
import NoImage from "./../../assets/images/no-image.png";

interface IVideoCard {
  video: IYouTubeVideoItem;
  isBig?: boolean;
}

const VideoCard = ({ video, isBig }: IVideoCard) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const background = require("./../../assets/video/broadchurch.mp4");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("VideoDetail", { video });
  };

  return (
    <Box width={isBig ? "100%" : 300} mr="$5">
      <Box borderRadius="$lg" overflow="hidden" width="100%" height={200}>
        {!isPlaying ? (
          <TouchableOpacity onPress={() => setIsPlaying(true)}>
            <Image
              source={
                video.snippet.thumbnails.high.url
                  ? { uri: video.snippet.thumbnails.high.url }
                  : NoImage
              }
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
              alt={video.snippet.title}
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
      <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
        {isBig && (
          <Text fontSize="$xs" color="$primary" fontWeight="$bold" pt="$4">
            {video.snippet.channelTitle}
          </Text>
        )}
        <Text
          pt="$2"
          fontSize="$xs"
          fontWeight="$medium"
          color="$primary"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {video.snippet.title}
        </Text>
        <Box
          pt={isBig ? "$2" : "$1"}
          flexDirection="row"
          justifyContent="flex-end"
          pb={isBig ? "$8" : 0}
        >
          <Text fontSize="$2xs" color="$primary">
            {useFormattedDate(video.snippet.publishedAt)}
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default VideoCard;
