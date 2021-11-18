import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Money from "../../components/Money";
import Profile from "../Profile";

import styles from "./Header.styles";

const Header = () => {
  const myRewards = 0;
  const giveRewards = 0;

  return (
    <Grid container sx={styles.header}>
      <Profile />
      <Box sx={styles.details}>
        <Box sx={styles.block}>
          <Typography gutterBottom>My Rewards</Typography>
          <Money value={myRewards} />
        </Box>
        <Box>
          <Typography gutterBottom>Give</Typography>
          <Money value={giveRewards} />
        </Box>
      </Box>
    </Grid>
  );
};

export default Header;
