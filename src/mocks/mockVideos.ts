import { IYouTubeSearchResponse } from "../interfaces";

const mockVideos: IYouTubeSearchResponse = {
  kind: "youtube#searchListResponse",
  etag: "MOCK_ETAG",
  regionCode: "PL",
  nextPageToken: "MOCK_NEXT_PAGE_TOKEN",
  pageInfo: {
    totalResults: 10,
    resultsPerPage: 10,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "etag_0",
      id: {
        kind: "youtube#video",
        videoId: "CgkZ7MvWUAA",
      },
      snippet: {
        publishedAt: "2024-01-16T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_0",
        title: "React Full Course for free ⚛️ (2024)",
        description: "A complete React course for 2024.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 0",
        liveBroadcastContent: "none",
        publishTime: "2024-01-16T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_1",
      id: {
        kind: "youtube#video",
        videoId: "dCLhUialKPQ",
      },
      snippet: {
        publishedAt: "2025-01-24T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_1",
        title:
          "React JS 19 Full Course 2025 | Build an App and Master React in 2 Hours",
        description: "Master React JS 19 with this full course.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/dCLhUialKPQ/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/dCLhUialKPQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/dCLhUialKPQ/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 1",
        liveBroadcastContent: "none",
        publishTime: "2025-01-24T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_2",
      id: {
        kind: "youtube#video",
        videoId: "kz23xxukY5s",
      },
      snippet: {
        publishedAt: "2023-12-19T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_2",
        title: "React JS c Нуля – ПОЛНЫЙ Курс для начинающих (2025)",
        description: "Полный курс React JS на русском языке.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/kz23xxukY5s/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/kz23xxukY5s/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/kz23xxukY5s/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 2",
        liveBroadcastContent: "none",
        publishTime: "2023-12-19T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_3",
      id: {
        kind: "youtube#video",
        videoId: "x4rFhThSX04",
      },
      snippet: {
        publishedAt: "2024-11-20T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_3",
        title: "Learn React JS - Full Beginner’s Tutorial & Practice Projects",
        description: "Complete React tutorial with practice projects.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 3",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_0",
      id: {
        kind: "youtube#video",
        videoId: "AgkZ7MvWUAA",
      },
      snippet: {
        publishedAt: "2024-01-16T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_0",
        title: "React Full Course for free ⚛️ (2024)",
        description: "A complete React course for 2024.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 0",
        liveBroadcastContent: "none",
        publishTime: "2024-01-16T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_1",
      id: {
        kind: "youtube#video",
        videoId: "aCLhUialKPQ",
      },
      snippet: {
        publishedAt: "2025-01-24T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_1",
        title:
          "React JS 19 Full Course 2025 | Build an App and Master React in 2 Hours",
        description: "Master React JS 19 with this full course.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/dCLhUialKPQ/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/dCLhUialKPQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/dCLhUialKPQ/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 1",
        liveBroadcastContent: "none",
        publishTime: "2025-01-24T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_2",
      id: {
        kind: "youtube#video",
        videoId: "az23xxukY5s",
      },
      snippet: {
        publishedAt: "2023-12-19T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_2",
        title: "React JS c Нуля – ПОЛНЫЙ Курс для начинающих (2025)",
        description: "Полный курс React JS на русском языке.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/kz23xxukY5s/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/kz23xxukY5s/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/kz23xxukY5s/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 2",
        liveBroadcastContent: "none",
        publishTime: "2023-12-19T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_3",
      id: {
        kind: "youtube#video",
        videoId: "a4rFhThSX04",
      },
      snippet: {
        publishedAt: "2024-11-20T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_3",
        title: "Learn React JS - Full Beginner’s Tutorial & Practice Projects",
        description: "Complete React tutorial with practice projects.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 3",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_0",
      id: {
        kind: "youtube#video",
        videoId: "aakZ7MvWUAA",
      },
      snippet: {
        publishedAt: "2024-01-16T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_0",
        title: "React Full Course for free ⚛️ (2024)",
        description: "A complete React course for 2024.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 0",
        liveBroadcastContent: "none",
        publishTime: "2024-01-16T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_1",
      id: {
        kind: "youtube#video",
        videoId: "aaLhUialKPQ",
      },
      snippet: {
        publishedAt: "2025-01-24T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_1",
        title:
          "React JS 19 Full Course 2025 | Build an App and Master React in 2 Hours",
        description: "Master React JS 19 with this full course.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/dCLhUialKPQ/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/dCLhUialKPQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/dCLhUialKPQ/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 1",
        liveBroadcastContent: "none",
        publishTime: "2025-01-24T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_2",
      id: {
        kind: "youtube#video",
        videoId: "aa23xxukY5s",
      },
      snippet: {
        publishedAt: "2023-12-19T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_2",
        title: "React JS c Нуля – ПОЛНЫЙ Курс для начинающих (2025)",
        description: "Полный курс React JS на русском языке.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/kz23xxukY5s/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/kz23xxukY5s/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/kz23xxukY5s/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 2",
        liveBroadcastContent: "none",
        publishTime: "2023-12-19T00:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "etag_3",
      id: {
        kind: "youtube#video",
        videoId: "aarFhThSX04",
      },
      snippet: {
        publishedAt: "2024-11-20T00:00:00Z",
        channelId: "MOCK_CHANNEL_ID_3",
        title: "Learn React JS - Full Beginner’s Tutorial & Practice Projects",
        description: "Complete React tutorial with practice projects.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mock Channel 3",
        liveBroadcastContent: "none",
        publishTime: "2024-11-20T00:00:00Z",
      },
    },
  ],
};

export default mockVideos;
