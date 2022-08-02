import axios from "axios";
import { IAxios } from "../interface/component";

const ApiCall = async ({
  url,
  method = "GET",
  body,
  headers = null,
  cookie,
}: IAxios) => {
  const options = {
    method,
    url: "https://dummyjson.com/" + url,
    body,
  };

  return axios(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("--------Show error notification!--------", error.response);
      return Promise.reject(error.response);
    });
};

export default ApiCall;
