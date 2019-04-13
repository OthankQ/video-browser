import axios from "axios";

const KEY = "AIzaSyCVLhgvNxgjigNcoyitS9zZ8dJ2fLn8qVw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
