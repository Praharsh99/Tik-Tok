import axios from "axios";

const instance = axios.create({
  baseURL: "https://cryptic-castle-35038.herokuapp.com",
});

export default instance;
