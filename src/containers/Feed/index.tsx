import React from "react";
import { useQuery } from "@apollo/client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

import Tabs from "../../components/TabComponent/Tabs";
import Tab from "../../components/TabComponent/Tab";

import { GET_REWARDS, GET_REWARD_BY_ID } from "../../apollo/queries";

import ListRewards from "../ListRewards";

import styles from "./Feed.styles";
import RewardModal from "../RewardModal";
import useToggleModal from "../../hooks/useToggleModal";

const Feed: React.FC = () => {
  const { open, handleOpenModal, handleCloseModal } = useToggleModal();

  const { data } = useQuery(GET_REWARDS);
  const { data: dataById } = useQuery(GET_REWARD_BY_ID, {
    variables: { id: "6196691c34c4981dd43cdad7" },
  });

  const allRewards = (data && data.rewards) || [];
  const rewardById = (dataById && dataById.rewardById) || [];

  console.log(allRewards, "rewardById", rewardById);

  return (
    <Box sx={styles.feed}>
      <Tabs>
        <Tab label="Feed">
          <ListRewards data={allRewards} />
        </Tab>
        <Tab label="My Rewards">
          <ListRewards isEditing data={[rewardById]} />
        </Tab>
      </Tabs>
      <Button sx={styles.addBtn} onClick={handleOpenModal}>
        <Add />
      </Button>
      <RewardModal open={open} onClose={handleCloseModal} />
    </Box>
  );
};

export default Feed;
