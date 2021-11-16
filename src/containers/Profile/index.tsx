import * as React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import { SIZE } from "../../constants";
import Avatar from "../../components/Avatar";

import { selectProfileData } from "../../store/profile/selectors";

import styles from "./Profile.styles";

const Profile = () => {
  const profile = useSelector(selectProfileData);

  return (
    <Box sx={styles.avatar}>
      <Avatar size={SIZE.m} />
      {profile ? (
        <Typography sx={styles.name}>{profile.name}</Typography>
      ) : (
        <Skeleton sx={styles.name} />
      )}
    </Box>
  );
};

export default Profile;
