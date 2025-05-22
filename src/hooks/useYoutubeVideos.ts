import { useEffect, useState } from "react";
import { fetchVideosByTopic } from "../services/api";

export const useYoutubeVideos = (topic: string) => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchVideosByTopic(topic);
      setVideos(data);
      setLoading(false);
    };
    load();
  }, [topic]);

  return { videos, loading };
};
