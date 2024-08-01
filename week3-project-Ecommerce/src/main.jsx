import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SWRConfig } from "swr";
import axios from "axios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher: (url) => axios(url).then((res) => res.data) }}>
      <App />
    </SWRConfig>
  </React.StrictMode>
);
