import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./materialTheme";

import store from "./store";

import App from "./App";

render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
