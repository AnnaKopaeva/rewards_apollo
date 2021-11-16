import * as React from "react";

import Preloader from "../components/Preloader";

interface WithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <Preloader /> : <Component {...(props as P)} />;
    }
  };

export default withLoading;
