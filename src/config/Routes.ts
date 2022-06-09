import { lazy } from "react";
import routePaths from "./RoutePaths";

export const routes = [
  {
    path: `${routePaths.NOTFOUND}`,
    private: false,
    element: lazy(() => import("../pages/NotFound")),
  },
  {
    path: `${routePaths.SIGNIN}`,
    private: false,
    element: lazy(() => import("../pages/Auth/SignIn")),
  },
  {
    path: `${routePaths.SIGNUP}`,
    private: false,
    element: lazy(() => import("../pages/Auth/SignUp")),
  },
  {
    path: `${routePaths.HOME}`,
    private: true,
    element: lazy(() => import("../pages/Home")),
  },
];
