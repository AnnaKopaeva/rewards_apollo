import * as React from "react";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import ListRewardsSkeleton from "./ListRewardsSkeleton";
import ListRewardsBox from "./ListRewardsBox";

import { RewardEntity } from "../../interfaces/RewardEntity";

import { selectRewardsLoading } from "../../store/rewards/selectors";

import styles from "./ListRewards.styles";

interface ListRewardsProps {
  data: RewardEntity[];
}

const ListRewards: React.FC<ListRewardsProps> = ({ data }) => {
  const isLoading = useSelector(selectRewardsLoading);

  return (
    <Grid container wrap="nowrap" sx={styles.rewards}>
      {isLoading ? <ListRewardsSkeleton /> : <ListRewardsBox data={data} />}
    </Grid>
  );
};

export default ListRewards;
