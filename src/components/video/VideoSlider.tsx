import { FlatList } from "react-native";
import { Box, Pressable, Spinner, Text } from "@gluestack-ui/themed";
import VideoCard from "./VideoCard";
import { IVideoSlider } from "../../interfaces";
import { useYoutubeVideos } from "../../hooks/useYoutubeVideos";
import { letterSpacingPercent } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { AppStackParamList } from "../../stacks/AppStack";

const VideoSlider = ({ title, apiData }: IVideoSlider) => {
  const { videos, loading } = useYoutubeVideos(apiData);
  const navigation =
    useNavigation<BottomTabNavigationProp<AppStackParamList>>();

  const handleSearchPress = () => {
    navigation.navigate("Search", { query: apiData });
  };

  return (
    <Box px="$6">
      <Box
        flexDirection="row"
        flex={1}
        alignItems="center"
        justifyContent="space-between"
        pb="$4"
      >
        <Text
          fontSize="$xl"
          fontWeight="$bold"
          color="$primary"
          letterSpacing={letterSpacingPercent(24, 1)}
        >
          {title}
        </Text>
        <Pressable onPress={handleSearchPress}>
          <Text
            textDecorationLine="underline"
            fontSize="$xs"
            letterSpacing={letterSpacingPercent(12, 1)}
          >
            Show more
          </Text>
        </Pressable>
      </Box>
      {!loading ? (
        <FlatList
          data={videos}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VideoCard video={item} />}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Box alignItems="center" justifyContent="center" height={200}>
          <Spinner size="large" />
        </Box>
      )}
    </Box>
  );
};

export default VideoSlider;
