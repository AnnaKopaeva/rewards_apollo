import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import styles from "./TabButtons.styles";

interface TabButtonsProps {
  tabsList: string[];
  activeTab: string;
  changeTab(tab: string): void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ tabsList, changeTab, activeTab }) => (
  <Box sx={styles.tabs}>
    {tabsList.map((tab: string) => (
      <Button
        key={tab}
        type="button"
        sx={tab === activeTab ? { ...styles.tab, ...styles.activeTab } : styles.tab}
        onClick={() => changeTab(tab)}
      >
        {tab}
      </Button>
    ))}
  </Box>
);

export default TabButtons;
