import {
  Box,
  FlatList,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { ScreenWrapper } from "../components/layouts";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AppStackParamList } from "../stacks/AppStack";
import { useSafePadding, useYoutubeVideos } from "../hooks";
import { VideoCard } from "../components/video";
import { SearchInput, SearchStatusMessage } from "../components/shared";
import { letterSpacingPercent } from "../utils";
import { useEffect, useRef, useState } from "react";
import { IYouTubeVideoItem } from "../interfaces";
import { SearchHeader } from "../components";

const SearchScreen = () => {
  const route = useRoute<RouteProp<AppStackParamList, "Search">>();
  const initialQuery = route.params?.query ?? "";
  const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);
  const allowedQueries = ["react", "react native", "javascript", "typescript"];
  const isQueryValid = allowedQueries.includes(initialQuery.toLowerCase());

  const { videos, loading, loadingMore, videosNumber, loadMore } =
    useYoutubeVideos(initialQuery);

  console.log("isLoad", loading);

  const { paddingTop } = useSafePadding({ desiredPaddingTop: 40 });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (loading && videos.length === 0) {
      // Po 5 sekundach pokazujemy komunikat, jeśli dalej loading i brak video
      timeoutId = setTimeout(() => {
        setShowTimeoutMessage(true);
      }, 5000);
    } else {
      // Resetujemy komunikat, gdy loading się skończy lub mamy filmy
      setShowTimeoutMessage(false);
    }

    // Czyścimy timeout jeśli loading się zmieni lub komponent się unmountuje
    return () => clearTimeout(timeoutId);
  }, [loading, videos.length]);

  return (
    <ScreenWrapper>
      <FlatList
        px="$6"
        data={videos}
        keyExtractor={(item) => (item as IYouTubeVideoItem).id.videoId}
        renderItem={({ item }) => (
          <VideoCard video={item as IYouTubeVideoItem} isBig />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListHeaderComponent={
          <SearchHeader
            query={initialQuery}
            videosNumber={videosNumber}
            paddingTop={paddingTop}
          />
        }
        ListFooterComponent={loadingMore ? <Spinner size="large" /> : null}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
      {/* <SearchStatusMessage
        loading={loading}
        videosLength={videos.length}
        showTimeoutMessage={showTimeoutMessage}
        isQueryValid={isQueryValid}
      /> */}
    </ScreenWrapper>
  );
};

export default SearchScreen;
