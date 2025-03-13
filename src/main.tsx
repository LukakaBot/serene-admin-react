import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { setupBucket } from "./plugins";
// import "virtual:uno.css";

function setupApp() {
  const root = createRoot(document.getElementById("root")!);

  setupBucket();

  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}

setupApp();
