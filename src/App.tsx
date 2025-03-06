import { Suspense } from "react";
// import { useRoutes } from 'react-router';
import "./App.css";
import { staticRoutes } from "./router";
import AuthRoute from "@/components/AuthRoute";

// function RouteNode() {
// 	const routes = useRoutes(staticRoutes);

// 	return routes;
// }

function App() {
  return (
    <Suspense>
      <AuthRoute routes={staticRoutes} />
    </Suspense>
  );
}

export default App;
