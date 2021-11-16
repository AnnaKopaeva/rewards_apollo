import * as React from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./Preloader.styles";

const Preloader = () => (
  <Box sx={styles.box}>
    <CircularProgress />
  </Box>
);

export default Preloader;
