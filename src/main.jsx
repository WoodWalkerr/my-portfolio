import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./themeTemp/themeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="bg-white dark:bg-black transition-all">
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
