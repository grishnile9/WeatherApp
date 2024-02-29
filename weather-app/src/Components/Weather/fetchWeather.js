import axios from "axios";

let token = "";
let myAxios;
const createAxios = () => {
  token = localStorage.token;
  myAxios = axios.create({
    baseURL:
      "http://localhost:8084/api/weather",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const searchWeather = (city) => {
  createAxios();
  return myAxios.get(city).then((response) => response.data);
};
export default searchWeather;
