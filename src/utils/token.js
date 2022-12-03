import { ACCESS_TOKEN, REFRESH_TOKEN } from "../consts/enums";

export const setTokens = (access, refresh) => {
  access && localStorage.setItem(ACCESS_TOKEN, access);
  refresh && localStorage.setItem(REFRESH_TOKEN, refresh);
};

export const removeTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN) || "";
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN) || "";
};
