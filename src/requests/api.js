import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  removeTokens,
} from "../utils/token";
import { getToken } from "./auth";

let refreshTokenPromise = null;

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

api.inseptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.inceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refresh = getRefreshToken();
    if ([401, 403].includes(error.response?.status)) {
      if (refresh) {
        if (!refreshTokenPromise) {
          refreshTokenPromise = getToken(refresh).then((data) => {
            refreshTokenPromise = null;
            return data;
          });
        }
      }
      return refreshTokenPromise
        .then((res) => {
          const { access, refresh } = res;
          setTokens(access, refresh);
          api.defaults.headers.common["Authorization"] = `Bearer ${access}`;
          return api(originalRequest);
        })
        .catch(() => {
          removeTokens();
          window.location.href = "/auth";
          return Promise.reject(error);
        });
    } else {
      window.location.href = "/auth";
    }
  }
);
