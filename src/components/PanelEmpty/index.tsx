import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import styles from "./PanelEmpty.styles";

interface PanelEmptyProps {
  title?: string;
}

const PanelEmpty: React.FC<PanelEmptyProps> = ({ title = "No data found", children = "" }) => (
  <Box sx={styles.panel}>
    <Typography variant="h5" gutterBottom fontSize={20} component="h5">
      {title}
    </Typography>
    <Typography variant="h6" gutterBottom fontSize={14} component="h6">
      {children}
    </Typography>
  </Box>
);

export default PanelEmpty;
