import { Text, VStack, HStack, Image, ScrollView } from "@gluestack-ui/themed";
import { ScreenWrapper } from "../components/layouts";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../stacks/AppStack";
import PersonIcon from "./../assets/icons/person-icon.png";
import { letterSpacingPercent } from "../utils";
import DetailsNotesTabs from "../components/DeatilsNotesTab";
import { useRef, useState } from "react";
import Video, { VideoRef } from "react-native-video";
import { TouchableOpacity } from "react-native";
import { BackButton } from "../components/shared";

const VideoDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "VideoDetail">>();
  const { video } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const background = require("./../assets/video/broadchurch.mp4");
  const videoRef = useRef<VideoRef>(null);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <ScreenWrapper>
      {!isPlaying && <BackButton />}
      {!isPlaying ? (
        <TouchableOpacity onPress={() => setIsPlaying(true)}>
          <Image
            source={{ uri: video.snippet.thumbnails.default.url }}
            style={{ width: "100%", height: 280 }}
            resizeMode="cover"
            alt={video.snippet.title}
          />
        </TouchableOpacity>
      ) : (
        <Video
          ref={videoRef}
          source={background}
          style={{ width: "100%", height: 280 }}
          resizeMode="cover"
          controls
          paused={!isPlaying}
          onProgress={({ currentTime }) => setCurrentTime(currentTime)}
        />
      )}
      <VStack px="$6" pt="$4" gap="$4">
        <Text
          fontWeight="$semibold"
          fontSize="$lg"
          numberOfLines={1}
          ellipsizeMode="tail"
          color="$primary"
        >
          {video.snippet.title}
        </Text>
        <HStack alignItems="center">
          <Image source={PersonIcon} alt="App Logo" width={48} height={48} />
          <Text
            pl="$4"
            color="$primary"
            letterSpacing={letterSpacingPercent(14, 1)}
            fontWeight="$extrabold"
          >
            {video.snippet.channelTitle}
          </Text>
        </HStack>
        <ScrollView>
          <DetailsNotesTabs video={video} currentTime={currentTime} />
        </ScrollView>
      </VStack>
    </ScreenWrapper>
  );
};

export default VideoDetailScreen;
