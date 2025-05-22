import { mockVideos } from "../mocks/mockVideos";

const API_KEY = "In Env";

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/search";

export const fetchVideosByTopic = async (topic: string) => {
  if (__DEV__) {
    return mockVideos;
  }

  const url = `${YOUTUBE_API}?part=snippet&q=${topic}&type=video&maxResults=10&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.items.map((item: any) => {
    const isoDate = item.snippet.publishTime;
    const date = new Date(isoDate);

    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;

    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishDate: formattedDate,
    };
  });
};
