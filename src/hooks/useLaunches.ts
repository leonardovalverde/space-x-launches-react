import { useEffect, useMemo, useState } from "react";
import {
  getLatestLaunch,
  getNextLaunch,
  getPastLaunches,
  getUpcomingLaunches,
} from "../services/launches";
import { Launche, LaunchesData } from "./types";

const initialState = {} as Launche;

export const useLaunches = (): LaunchesData => {
  const [pastLaunches, setPastLaunches] = useState<Launche[]>([initialState]);
  const [latestLaunch, setLatestLaunch] = useState<Launche>(initialState);
  const [nextLaunch, setNextLaunch] = useState<Launche>(initialState);
  const [upcomingLaunches, setUpcomingLaunches] = useState<Launche[]>([
    initialState,
  ]);

  useEffect(() => {
    const fetchPastLaunches = async () => {
      setPastLaunches(await getPastLaunches());
      setLatestLaunch(await getLatestLaunch());
      setNextLaunch(await getNextLaunch());
      setUpcomingLaunches(await getUpcomingLaunches());
    };
    fetchPastLaunches();
  }, []);

  return { pastLaunches, latestLaunch, nextLaunch, upcomingLaunches };
};
