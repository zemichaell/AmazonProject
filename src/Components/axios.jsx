import axios from "axios";
const instance = axios.create({
  // the API (Cloud function) URL
  //   baseURL: "http://127.0.0.1:5005/c-931474/us-central1/api.",
  baseURL: "http://127.0.0.1:3003",
});
export default instance;
