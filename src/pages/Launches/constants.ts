import { colors } from "../../ui-tokens/colors";

interface colorSchema {
  [key: number]: {
    [key: number]: string;
  };
}

export const launchesMainPageExperimentId = "uOW8iEPtT9uE3_othwCo9w";

export const colorSchema: colorSchema = {
  "0": {
    0: colors.green,
    1: colors.green,
    2: colors.white,
    3: colors.white,
  },
  "1": {
    0: colors.green,
    1: colors.white,
    2: colors.white,
    3: colors.green,
  },
  "2": {
    0: colors.white,
    1: colors.green,
    2: colors.green,
    3: colors.white,
  },
  "3": {
    0: colors.white,
    1: colors.white,
    2: colors.green,
    3: colors.green,
  },
};
