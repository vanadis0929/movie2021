import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c7366ad994f02b8aeb39d880756fc500",
    language: "ko-KR",
  },
});

api.get("tv/popular");

//export default api;
