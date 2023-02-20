import { rest } from "msw";
import { endpoints } from "../endpoints";
import {
  pastLaunchesFixture,
  latestLaunchFixture,
  nextLaunchFixture,
  upcomingLaunchFixture,
} from "./__fixtures__/launches";

const getPastLaunchesFixtures = () => {
  return rest.get(`${endpoints.launches}/past`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pastLaunchesFixture));
  });
};
const getLatestLaunchesFixtures = () => {
  return rest.get(`${endpoints.launches}/latest`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(latestLaunchFixture));
  });
};
const getNextLaunchesFixtures = () => {
  return rest.get(`${endpoints.launches}/next`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(nextLaunchFixture));
  });
};
const getUpcomingLaunchesFixtures = () => {
  return rest.get(`${endpoints.launches}/upcoming`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(upcomingLaunchFixture));
  });
};

export const handlers = [
  getPastLaunchesFixtures(),
  getLatestLaunchesFixtures(),
  getNextLaunchesFixtures(),
  getUpcomingLaunchesFixtures(),
];
