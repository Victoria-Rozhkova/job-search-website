import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app";
import WithProviders from "@/app/providers";
import reportWebVitals from "./reportWebVitals";
import "@/shared/styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WithProviders>
      <App />
    </WithProviders>
  </React.StrictMode>
);

reportWebVitals();
