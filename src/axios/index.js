import axios from "axios";

export default axios.create({
  baseURL: "http://dev-api.trysedalia.com",
  headers: {
    "Content-Type": "application/json",
  },
});
