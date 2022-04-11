import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const app = document.getElementById("root");
if (!app) {
  throw new Error("No root element found");
}
const root = createRoot(app);
root.render(<App />);