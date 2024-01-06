import axios from "axios";

const http = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      Accept: "application/json",
    },
  });

  return instance;
};

export default http;
