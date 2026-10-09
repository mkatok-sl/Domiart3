import "@fontsource-variable/cinzel";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "@fontsource-variable/lora";
import "@fontsource-variable/lora/wght-italic.css";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/manrope";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
