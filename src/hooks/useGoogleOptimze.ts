import { useEffect, useState } from "react";
import { GetGoogleOptimizeVariant } from "./types";

export const useGetGoogleOptimizeVariant = (
  experimentId: string
): GetGoogleOptimizeVariant => {
  const [variant, setVariant] = useState<number | undefined>();

  useEffect(() => {
    const getVariant = async () => {
      if (window.dataLayer) {
        await window.dataLayer.push({ event: "optimize.activate" });
      }

      const variant = await window.google_optimize.get(experimentId);
      setVariant(variant);
    };
    getVariant();
  }, [experimentId, window.google_optimize, window.dataLayer]);

  return { variant };
};
