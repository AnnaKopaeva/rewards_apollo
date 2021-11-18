import * as React from "react";

import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Avatar from "../../components/Avatar";

import styles from "./ListRewards.styles";

// TODO: add data
const ListRewardsSkeleton: React.FC = () => (
  <Box>
    {[].map((item) => (
      <Box key={item.id} sx={styles.rewardItem}>
        <Skeleton variant="circular" height={40}>
          <Avatar />
        </Skeleton>
        <Box sx={{ ...styles.rewardDetails, width: "80%" }}>
          <Skeleton width="60%">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="20%" />
          <Skeleton height={40} />
        </Box>
      </Box>
    ))}
  </Box>
);

export default ListRewardsSkeleton;
