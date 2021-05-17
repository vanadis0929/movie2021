import { ApiOutlined } from "@ant-design/icons";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c7366ad994f02b8aeb39d880756fc500",
    language: "ko-KR",
  },
});

//api.get("tv/popular");

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
};

export const tvApi = {
  nowPlaying: () => api.get("tv/nowplaying"),
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/popular"),
};
