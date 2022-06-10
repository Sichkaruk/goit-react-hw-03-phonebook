import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import { IconContext } from "react-icons";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{
          size: "1.3em",
          style: { verticalAlign: "middle", marginRight: "8px" },
        }}
      >
        <App />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
