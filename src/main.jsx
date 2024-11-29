import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./manager_folder/static/renderStatic/index.css";
import { AppContextProvider } from "./manager_folder/public/context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
