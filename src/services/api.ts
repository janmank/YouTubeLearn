import { IYouTubeSearchResponse } from "../interfaces";
import { mockVideos } from "../mocks";

const API_KEY = "AIzaSyDyQwvkO_myR4rZhck99Faeajn_G6b4QTo";
const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/search";

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
