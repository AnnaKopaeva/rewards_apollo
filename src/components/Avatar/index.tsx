import * as React from "react";

import Avatar, { AvatarProps } from "@mui/material/Avatar";
import { Person } from "@mui/icons-material";

import { SIZE } from "../../constants";
import styles from "./Avatar.styles";

interface AvatarComponentProps extends AvatarProps {
  size?: SIZE;
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({ size = SIZE.s, ...props }) => {
  const { avatar, icon } = styles(size);

  return (
    <Avatar {...props} sx={{ ...props.sx, ...avatar }}>
      <Person sx={icon} />
    </Avatar>
  );
};

export default AvatarComponent;
