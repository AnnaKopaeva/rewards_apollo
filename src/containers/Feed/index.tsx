import React from "react";
import { useQuery } from "@apollo/client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

import Tabs from "../../components/TabComponent/Tabs";
import Tab from "../../components/TabComponent/Tab";

import { GET_REWARDS, GET_MY_REWARDS } from "../../apollo/queries";

import ListRewards from "../ListRewards";

import styles from "./Feed.styles";
import RewardModal from "../RewardModal";
import useToggleModal from "../../hooks/useToggleModal";

const Feed: React.FC = () => {
  const { open, handleOpenModal, handleCloseModal } = useToggleModal();

  const { data } = useQuery(GET_REWARDS);
  const { data: myData } = useQuery(GET_MY_REWARDS);

  const allRewards = (data && data.rewards) || [];
  const myRewards = (myData && myData.myRewards) || [];

  console.log(allRewards, "myRewards", myRewards);

  return (
    <Box sx={styles.feed}>
      <Tabs>
        <Tab label="Feed">
          <ListRewards data={allRewards} />
        </Tab>
        <Tab label="My Rewards">
          <ListRewards data={myRewards} />
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
