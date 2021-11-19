import * as React from "react";

import Grid from "@mui/material/Grid";

import ListRewardsSkeleton from "./ListRewardsSkeleton";
import ListRewardsBox from "./ListRewardsBox";

import { RewardEntity } from "../../interfaces/RewardEntity";

import styles from "./ListRewards.styles";

interface ListRewardsProps {
  data: RewardEntity[];
  isEditing?: boolean;
}

const ListRewards: React.FC<ListRewardsProps> = ({ data, isEditing }) => {
  const isLoading = false;

  return (
    <Grid container wrap="nowrap" sx={styles.rewards}>
      {isLoading ? <ListRewardsSkeleton /> : <ListRewardsBox data={data} isEditing={isEditing} />}
    </Grid>
  );
};

export default ListRewards;
