import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import "@ant-design/v5-patch-for-react-19";
import "./index.css";
import App from "./App.tsx";
import { setupBucket } from "./plugins";

function setupApp() {
  const root = createRoot(document.getElementById("root")!);

  setupBucket();

  root.render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  );
}

setupApp();
