import React, { Component, ErrorInfo, ReactNode } from "react";

import Box from "@mui/material/Box";
import ErrorIcon from "@mui/icons-material/Error";

import styles from "./ErrorBoundary.styles";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box sx={styles.wrapper}>
          <ErrorIcon sx={styles.icon} />
          <h1>Sorry.. there was an error</h1>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
