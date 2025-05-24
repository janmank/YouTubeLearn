import { VideoTopic } from "../enums";

export interface IYouTubeSearchResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IYouTubeVideoItem[];
}

export interface IYouTubeVideoItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: IYouTubeThumbnail;
      medium: IYouTubeThumbnail;
      high: IYouTubeThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export interface IYouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface IVideoSlider {
  apiData: VideoTopic;
  title: string;
}

export interface IVideoStats {
  views: number;
  likes: number;
}
