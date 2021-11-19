import * as React from "react";
import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Avatar from "../../components/Avatar";
import PanelEmpty from "../../components/PanelEmpty";

import { RewardEntity } from "../../interfaces/RewardEntity";

import styles from "./ListRewards.styles";

interface ListRewardsProps {
  data: RewardEntity[];
}

const ListRewardsBox: React.FC<ListRewardsProps> = ({ data }) => {
  dayjs.extend(relativeTimePlugin);

  return (
    <>
      {data.length ? (
        data.map((reward) => (
          <Box key={reward._id} sx={styles.rewardItem}>
            <Avatar />
            <Box sx={styles.rewardDetails}>
              <Typography gutterBottom variant="caption">
                {reward.user?.name} rewarded by {reward.userBy?.name}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
                sx={styles.rewardTime}
              >
                {dayjs.unix(reward.createAt).fromNow()}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={styles.rewardMessage}>
                {reward.message}
              </Typography>
            </Box>
          </Box>
        ))
      ) : (
        <PanelEmpty>You can add new reward.</PanelEmpty>
      )}
    </>
  );
};

export default ListRewardsBox;
