import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root") || document.body;

createRoot(rootElement).render(
  <StrictMode>
    <></>
  </StrictMode>
);
