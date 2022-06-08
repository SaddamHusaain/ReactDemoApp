import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../config/Routes";

import AuthRoute from "./AuthRoute";
import DashBoardRoute from "./DashBoardRoute";

function BaseRoutes() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={
                route.private ? (
                  <DashBoardRoute>
                    <Suspense fallback="...Loading">
                      <route.element />
                    </Suspense>
                  </DashBoardRoute>
                ) : (
                  <AuthRoute>
                    <Suspense fallback="...Loading">
                      <route.element />
                    </Suspense>
                  </AuthRoute>
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default BaseRoutes;
