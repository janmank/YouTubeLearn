import { FlatList, Spinner } from "@gluestack-ui/themed";
import { ScreenWrapper } from "../components/layouts";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useSafePadding, useYoutubeVideos } from "../hooks";
import { VideoCard } from "../components/video";
import { EmptyList, SortFilterModal } from "../components/shared";
import { useEffect, useRef, useState } from "react";
import { IYouTubeVideoItem } from "../interfaces";
import { SearchHeader } from "../components";
import { TabStackParamList } from "../stacks/AppStack";

const SearchScreen = () => {
  const route = useRoute<RouteProp<TabStackParamList, "Search">>();
  const initialQuery = route.params?.query ?? "";
  const [showTimeoutMessage, setShowTimeoutMessage] = useState<boolean>(false);
  const allowedQueries = ["react", "react native", "javascript", "typescript"];
  const isQueryValid = allowedQueries.includes(initialQuery.toLowerCase());

  const [sortOrder, setSortOrder] = useState<"relevance" | "date">("relevance");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { videos, loading, videosNumber, loadingMore, loadMore } =
    useYoutubeVideos(initialQuery, sortOrder);

  const { paddingTop } = useSafePadding({ desiredPaddingTop: 40 });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (loading && videos.length === 0) {
      timeoutId = setTimeout(() => {
        setShowTimeoutMessage(true);
      }, 5000);
    } else {
      setShowTimeoutMessage(false);
    }

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
            selectedSortOption={sortOrder}
            onOpenSortModal={() => setIsModalOpen(true)}
          />
        }
        ListFooterComponent={loadingMore ? <Spinner size="large" /> : null}
        contentContainerStyle={{ paddingBottom: 40 }}
        ListEmptyComponent={() => <EmptyList />}
      />
      {/* <SearchStatusMessage
        loading={loading}
        videosLength={videos.length}
        showTimeoutMessage={showTimeoutMessage}
        isQueryValid={isQueryValid}
      /> */}
      <SortFilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={(option) => {
          setSortOrder(option as "relevance" | "date");
          setIsModalOpen(false);
        }}
        selectedOption={sortOrder}
      />
    </ScreenWrapper>
  );
};

export default SearchScreen;
