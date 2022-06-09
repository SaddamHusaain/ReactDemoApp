import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./config/Routes";
import { AuthLayout, DashBoardLayout } from "./layout";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={
                route.private ? (
                  <DashBoardLayout>
                    <Suspense fallback="...Loading">
                      <route.element />
                    </Suspense>
                  </DashBoardLayout>
                ) : (
                  <AuthLayout>
                    <Suspense fallback="...Loading">
                      <route.element />
                    </Suspense>
                  </AuthLayout>
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
