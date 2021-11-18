import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./materialTheme";

import store from "./store";

import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphiql",
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
