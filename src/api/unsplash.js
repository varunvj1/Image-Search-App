import axios from "axios";

// .create creates an instane of axios and set its default properties
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID coflEIfMl-iUwR1Jzn50H7-Rf_G3wlX4iNTToz1G3J8"
  }
});
