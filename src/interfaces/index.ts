import { VideoTopic } from "../enums";

export interface IVideoCard {
  id: string;
  title: string;
  thumbnail: string;
  publishDate: string;
}

export interface IVideoSlider {
  apiData: VideoTopic;
  title: string;
}
