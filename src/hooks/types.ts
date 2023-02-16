export interface Launche {
  capsules: string[];
  cores: {
    core: string;
    flight: number;
  }[];
  crew: string[];
  date_local: string;
  date_precision: string;
  failures: {
    altitude: number;
    reason: string;
    time: number;
  }[];
  flight_number: number;
  name: string;
  id: string;
}

export interface LaunchesData {
  pastLaunches: Launche[];
  latestLaunch: Launche;
  nextLaunch: Launche;
  upcomingLaunches: Launche[];
}
