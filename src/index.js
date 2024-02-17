import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Loader from "./components/Loader";
import "./index.css";

import "./i18n";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
