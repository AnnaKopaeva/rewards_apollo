import { Theme } from "@mui/material";

const styles = {
  tabs: {
    borderBottom: (theme: Theme) => `1px solid ${theme.palette.grey.A400}`,
  },
  tab: {
    fontSize: "1.2rem",
    fontWeight: 400,
    padding: "5px 20px",
    borderBottom: "2px solid transparent",
    textTransform: "capitalize",
    borderRadius: 0,
    color: "grey.900",
  },
  activeTab: {
    borderBottom: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
    color: "primary.main",
  },
} as const;

export default styles;
