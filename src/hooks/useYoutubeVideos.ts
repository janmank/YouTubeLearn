import { useEffect, useState } from "react";
import { fetchVideosByTopic } from "../services/api";
import { IYouTubeVideoItem } from "../interfaces";

export const useYoutubeVideos = (
  topic: string,
  sortOrder?: "relevance" | "date"
) => {
  const [videos, setVideos] = useState<IYouTubeVideoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [videosNumber, setVideosNumber] = useState<number>(0);

  const fetchVideos = async (isNextPage = false) => {
    if (isNextPage) setLoadingMore(true);
    else setLoading(true);

    const data = await fetchVideosByTopic(
      topic,
      isNextPage && nextPageToken ? nextPageToken : undefined,
      sortOrder
    );

    setVideos((prev) => (isNextPage ? [...prev, ...data.items] : data.items));
    setNextPageToken(data.nextPageToken ?? null);
    setVideosNumber(data.pageInfo?.totalResults ?? 0);

    if (isNextPage) setLoadingMore(false);
    else setLoading(false);
  };

  const allowedTopics = ["react", "react native", "javascript", "typescript"];
  useEffect(() => {
    if (allowedTopics.includes(topic.toLowerCase())) {
      fetchVideos();
    }
  }, [topic, sortOrder]);

  const loadMore = () => {
    if (nextPageToken && !loadingMore) {
      fetchVideos(true);
    }
  };

  return { videos, loading, loadingMore, videosNumber, loadMore };
};
