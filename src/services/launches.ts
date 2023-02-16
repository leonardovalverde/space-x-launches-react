import { fetchApi } from "./api";
import { endpoints } from "./endpoints";

export const getPastLaunches = async () => {
  const response = await fetchApi(`${endpoints.launches}/past`);
  return response;
};

export const getUpcomingLaunches = async () => {
  const response = await fetchApi(`${endpoints.launches}/upcoming`);
  return response;
};

export const getLatestLaunch = async () => {
  const response = await fetchApi(`${endpoints.launches}/latest`);
  return response;
};

export const getNextLaunch = async () => {
  const response = await fetchApi(`${endpoints.launches}/next`);
  return response;
};
