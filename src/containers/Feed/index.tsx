import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

import Tabs from "../../components/TabComponent/Tabs";
import Tab from "../../components/TabComponent/Tab";

import { fetchRewards } from "../../store/rewards/actions";
import { fetchRewardsByUser } from "../../store/myRewards/actions";
import { selectAllRewards } from "../../store/rewards/selectors";
import { selectMyRewardsData } from "../../store/myRewards/selectors";
import { selectProfileData } from "../../store/profile/selectors";

import ListRewards from "../ListRewards";

import styles from "./Feed.styles";
import RewardModal from "../RewardModal";
import useToggleModal from "../../hooks/useToggleModal";

const Feed: React.FC = () => {
  const dispatch = useDispatch();

  const profile = useSelector(selectProfileData);
  const allRewards = useSelector(selectAllRewards);
  const myRewards = useSelector(selectMyRewardsData);

  const { open, handleOpenModal, handleCloseModal } = useToggleModal();

  useEffect(() => {
    dispatch(fetchRewards());
    dispatch(fetchRewardsByUser(profile.id));
  }, []);

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
