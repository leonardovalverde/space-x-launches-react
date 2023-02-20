export const pastLaunchesFixture = [
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
        large: "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png",
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [],
      },
      presskit: null,
      webcast: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
      youtube_id: "0a_00nJ_Y88",
      article:
        "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
      wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
    },
    static_fire_date_utc: "2006-03-17T00:00:00.000Z",
    static_fire_date_unix: 1142553600,
    net: false,
    window: 0,
    rocket: "5e9d0d95eda69955f709d1eb",
    success: false,
    failures: [
      {
        time: 33,
        altitude: null,
        reason: "merlin engine failure",
      },
    ],
    details: "Engine failure at 33 seconds and loss of vehicle",
    crew: [],
    ships: [],
    capsules: [],
    payloads: ["5eb0e4b5b6c3bb0006eeb1e1"],
    launchpad: "5e9e4502f5090995de566f86",
    flight_number: 1,
    name: "FalconSat",
    date_utc: "2006-03-24T22:30:00.000Z",
    date_unix: 1143239400,
    date_local: "2006-03-25T10:30:00+12:00",
    date_precision: "hour",
    upcoming: false,
    cores: [
      {
        core: "5e9e289df35918033d3b2623",
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: "5eb87cd9ffd86e000604b32a",
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: "https://images2.imgbox.com/f9/4a/ZboXReNb_o.png",
        large: "https://images2.imgbox.com/80/a2/bkWotCIS_o.png",
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [],
      },
      presskit: null,
      webcast: "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
      youtube_id: "Lk4zQ2wP-Nc",
      article:
        "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
      wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
    },
    static_fire_date_utc: null,
    static_fire_date_unix: null,
    net: false,
    window: 0,
    rocket: "5e9d0d95eda69955f709d1eb",
    success: false,
    failures: [
      {
        time: 301,
        altitude: 289,
        reason: "harmonic oscillation leading to premature engine shutdown",
      },
    ],
    details:
      "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    crew: [],
    ships: [],
    capsules: [],
    payloads: ["5eb0e4b6b6c3bb0006eeb1e2"],
    launchpad: "5e9e4502f5090995de566f86",
    flight_number: 2,
    name: "DemoSat",
    date_utc: "2007-03-21T01:10:00.000Z",
    date_unix: 1174439400,
    date_local: "2007-03-21T13:10:00+12:00",
    date_precision: "hour",
    upcoming: false,
    cores: [
      {
        core: "5e9e289ef35918416a3b2624",
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: "5eb87cdaffd86e000604b32b",
  },
];

export const latestLaunchFixture = {
  fairings: null,
  links: {
    patch: {
      small: "https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png",
      large: "https://images2.imgbox.com/33/2e/k6VE4iYl_o.png",
    },
    reddit: {
      campaign: null,
      launch:
        "https://www.reddit.com/r/spacex/comments/xvm76j/rspacex_crew5_launchcoast_docking_discussion_and/",
      media: null,
      recovery: null,
    },
    flickr: {
      small: [],
      original: [],
    },
    presskit: null,
    webcast: "https://youtu.be/5EwW8ZkArL4",
    youtube_id: "5EwW8ZkArL4",
    article: null,
    wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Crew-5",
  },
  static_fire_date_utc: null,
  static_fire_date_unix: null,
  net: false,
  window: null,
  rocket: "5e9d0d95eda69973a809d1ec",
  success: true,
  failures: [],
  details: null,
  crew: [
    "62dd7196202306255024d13c",
    "62dd71c9202306255024d13d",
    "62dd7210202306255024d13e",
    "62dd7253202306255024d13f",
  ],
  ships: [],
  capsules: ["617c05591bad2c661a6e2909"],
  payloads: ["62dd73ed202306255024d145"],
  launchpad: "5e9e4502f509094188566f88",
  flight_number: 187,
  name: "Crew-5",
  date_utc: "2022-10-05T16:00:00.000Z",
  date_unix: 1664985600,
  date_local: "2022-10-05T12:00:00-04:00",
  date_precision: "hour",
  upcoming: false,
  cores: [
    {
      core: "633d9da635a71d1d9c66797b",
      flight: 1,
      gridfins: true,
      legs: true,
      reused: false,
      landing_attempt: true,
      landing_success: true,
      landing_type: "ASDS",
      landpad: "5e9e3033383ecbb9e534e7cc",
    },
  ],
  auto_update: true,
  tbd: false,
  launch_library_id: "f33d5ece-e825-4cd8-809f-1d4c72a2e0d3",
  id: "62dd70d5202306255024d139",
};

export const nextLaunchFixture = {
  fairings: {
    reused: null,
    recovery_attempt: null,
    recovered: null,
    ships: [],
  },
  links: {
    patch: {
      small: null,
      large: null,
    },
    reddit: {
      campaign: null,
      launch: null,
      media: null,
      recovery: null,
    },
    flickr: {
      small: [],
      original: [],
    },
    presskit: null,
    webcast: "https://youtu.be/pY628jRd6gM",
    youtube_id: "pY628jRd6gM",
    article: null,
    wikipedia: null,
  },
  static_fire_date_utc: null,
  static_fire_date_unix: null,
  net: false,
  window: null,
  rocket: "5e9d0d95eda69974db09d1ed",
  success: null,
  failures: [],
  details: null,
  crew: [],
  ships: [],
  capsules: [],
  payloads: ["5fe3b86eb3467846b324217c"],
  launchpad: "5e9e4502f509094188566f88",
  flight_number: 188,
  name: "USSF-44",
  date_utc: "2022-11-01T13:41:00.000Z",
  date_unix: 1667310060,
  date_local: "2022-11-01T09:41:00-04:00",
  date_precision: "hour",
  upcoming: true,
  cores: [
    {
      core: "5fe3b8f2b3467846b3242181",
      flight: 1,
      gridfins: true,
      legs: true,
      reused: false,
      landing_attempt: null,
      landing_success: null,
      landing_type: null,
      landpad: null,
    },
    {
      core: "5fe3b8fbb3467846b3242182",
      flight: 1,
      gridfins: true,
      legs: true,
      reused: false,
      landing_attempt: null,
      landing_success: null,
      landing_type: null,
      landpad: null,
    },
    {
      core: "5fe3b906b3467846b3242183",
      flight: 1,
      gridfins: true,
      legs: true,
      reused: false,
      landing_attempt: null,
      landing_success: null,
      landing_type: null,
      landpad: null,
    },
  ],
  auto_update: true,
  tbd: false,
  launch_library_id: "2306e0bc-e1a3-4a4a-9285-e1a94073655e",
  id: "6243aec2af52800c6e91925d",
};

export const upcomingLaunchFixture = [
  {
    fairings: {
      reused: null,
      recovery_attempt: null,
      recovered: null,
      ships: [],
    },
    links: {
      patch: {
        small: null,
        large: null,
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [],
      },
      presskit: null,
      webcast: "https://youtu.be/pY628jRd6gM",
      youtube_id: "pY628jRd6gM",
      article: null,
      wikipedia: null,
    },
    static_fire_date_utc: null,
    static_fire_date_unix: null,
    net: false,
    window: null,
    rocket: "5e9d0d95eda69974db09d1ed",
    success: null,
    failures: [],
    details: null,
    crew: [],
    ships: [],
    capsules: [],
    payloads: ["5fe3b86eb3467846b324217c"],
    launchpad: "5e9e4502f509094188566f88",
    flight_number: 188,
    name: "USSF-44",
    date_utc: "2022-11-01T13:41:00.000Z",
    date_unix: 1667310060,
    date_local: "2022-11-01T09:41:00-04:00",
    date_precision: "hour",
    upcoming: true,
    cores: [
      {
        core: "5fe3b8f2b3467846b3242181",
        flight: 1,
        gridfins: true,
        legs: true,
        reused: false,
        landing_attempt: null,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
      {
        core: "5fe3b8fbb3467846b3242182",
        flight: 1,
        gridfins: true,
        legs: true,
        reused: false,
        landing_attempt: null,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
      {
        core: "5fe3b906b3467846b3242183",
        flight: 1,
        gridfins: true,
        legs: true,
        reused: false,
        landing_attempt: null,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: "2306e0bc-e1a3-4a4a-9285-e1a94073655e",
    id: "6243aec2af52800c6e91925d",
  },
  {
    fairings: {
      reused: null,
      recovery_attempt: null,
      recovered: null,
      ships: [],
    },
    links: {
      patch: {
        small: "https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png",
        large: "https://images2.imgbox.com/e3/cc/hN96PmST_o.png",
      },
      reddit: {
        campaign:
          "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
        launch: null,
        media: null,
        recovery:
          "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/",
      },
      flickr: {
        small: [],
        original: [],
      },
      presskit: null,
      webcast: "https://youtu.be/iYtH2khNIgU",
      youtube_id: "iYtH2khNIgU",
      article: null,
      wikipedia: null,
    },
    static_fire_date_utc: null,
    static_fire_date_unix: null,
    net: false,
    window: null,
    rocket: "5e9d0d95eda69973a809d1ec",
    success: null,
    failures: [],
    details: null,
    crew: [],
    ships: [],
    capsules: [],
    payloads: ["631616aeffc78f3b8567071b"],
    launchpad: "5e9e4501f509094ba4566f84",
    flight_number: 188,
    name: "Starlink 4-36 (v1.5)",
    date_utc: "2022-10-20T14:50:00.000Z",
    date_unix: 1666277400,
    date_local: "2022-10-20T10:50:00-04:00",
    date_precision: "hour",
    upcoming: true,
    cores: [
      {
        core: null,
        flight: null,
        gridfins: null,
        legs: null,
        reused: null,
        landing_attempt: null,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: "aa88b853-9e04-4a28-9433-d87799331b1b",
    id: "63161345ffc78f3b8567070d",
  },
];