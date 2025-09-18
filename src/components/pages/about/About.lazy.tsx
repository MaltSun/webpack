import { lazy } from "react";

export const LazyAbout = lazy(() =>
  Promise.resolve(require("./About.tsx")).then(module => ({ default: module.default }))
);