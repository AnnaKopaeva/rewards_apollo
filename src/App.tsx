import * as React from "react";

import Feed from "./containers/Feed";
import Header from "./containers/Header";
import Wrapper from "./components/Wrapper";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <Wrapper>
      <Header />
      <Feed />
    </Wrapper>
  </ErrorBoundary>
);

export default App;
