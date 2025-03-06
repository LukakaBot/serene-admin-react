import { Suspense } from "react";
import { useRoutes } from "react-router";
import "./App.css";

import { staticRoutes } from "./router";

function RoutesNode() {
  const routes = useRoutes(staticRoutes);

  return routes;
}

function App() {
  return (
    <Suspense>
      <RoutesNode />
    </Suspense>
  );
}

export default App;
