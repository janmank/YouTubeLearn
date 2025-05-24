import { IVideoStats, IYouTubeSearchResponse } from "../interfaces";
import { mockVideos } from "../mocks";
import { API_KEY } from "@env";

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/search";
const YOUTUBE_API_STATS = "https://www.googleapis.com/youtube/v3";

export const fetchVideosByTopic = async (
  topic: string,
  pageToken?: string,
  sortOrder?: "date" | "relevance"
): Promise<IYouTubeSearchResponse> => {
  if (__DEV__) {
    return mockVideos;
  }

  const query = encodeURIComponent(`${topic} tutorial`);
  const url = `${YOUTUBE_API}?part=snippet&q=${query}&type=video&maxResults=10&order=${
    sortOrder ? sortOrder : "relevance"
  }&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ""}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchVideoStats = async (
  videoId: string
): Promise<IVideoStats | null> => {
  try {
    const url = `${YOUTUBE_API_STATS}/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

    const response = await fetch(url);
    const text = await response.text();

    if (!text) {
      console.warn("Empty response");
      return null;
    }

    const data = JSON.parse(text);

    const stats = data?.items?.[0]?.statistics;
    if (!stats) return null;

    return {
      views: stats.viewCount,
      likes: stats.likeCount,
    };
  } catch (error) {
    console.error("Error fetching video stats:", error);
    return null;
  }
};
