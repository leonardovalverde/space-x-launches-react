import { useEffect, useMemo, useState } from "react";
import {
  getLatestLaunch,
  getNextLaunch,
  getPastLaunches,
  getUpcomingLaunches,
} from "../services/launches";
import { Launche, LaunchesData } from "./types";

const initialState = {} as Launche;

export const useLaunches = (
  type: Array<"past" | "latest" | "next" | "upcoming">
): LaunchesData => {
  const [pastLaunches, setPastLaunches] = useState<Launche[]>([initialState]);
  const [latestLaunch, setLatestLaunch] = useState<Launche>(initialState);
  const [nextLaunch, setNextLaunch] = useState<Launche>(initialState);
  const [upcomingLaunches, setUpcomingLaunches] = useState<Launche[]>([
    initialState,
  ]);

  useEffect(() => {
    const fetchPastLaunches = async () => {
      if (type.includes("past")) setPastLaunches(await getPastLaunches());
      if (type.includes("latest")) setLatestLaunch(await getLatestLaunch());
      if (type.includes("next")) setNextLaunch(await getNextLaunch());
      if (type.includes("upcoming"))
        setUpcomingLaunches(await getUpcomingLaunches());
    };
    fetchPastLaunches();
  }, []);

  return { pastLaunches, latestLaunch, nextLaunch, upcomingLaunches };
};
