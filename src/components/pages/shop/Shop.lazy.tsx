import { lazy } from "react";

export const LazyShop = lazy(() =>
  Promise.resolve(require("./Shop")).then(module => ({ default: module.default }))
);