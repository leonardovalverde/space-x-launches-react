import { rest } from "msw";
import { pastLaunches } from "./__fixtures__/launches";

const getPastLaunchesFixtures = () => {
  return rest.get(`http://localhost:5000/launches/past`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pastLaunches));
  });
};
const getLatestLaunchesFixtures = () => {
  return rest.get(`http://localhost:5000/launches/latest`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ pastLaunches }));
  });
};
const getNextLaunchesFixtures = () => {
  return rest.get(`http://localhost:5000/launches/next`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ pastLaunches }));
  });
};
const getUpcomingLaunchesFixtures = () => {
  return rest.get(
    `http://localhost:5000/launches/upcoming`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ pastLaunches }));
    }
  );
};

export const handlers = [
  getPastLaunchesFixtures(),
  getLatestLaunchesFixtures(),
  getNextLaunchesFixtures(),
  getUpcomingLaunchesFixtures(),
];
