const styles = {
  rewards: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "calc(100vh - 330px)",
    overflowY: "auto",
  },
  rewardBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    mt: 5,
  },
  rewardItem: { display: "flex" },
  rewardDetails: { pl: 2 },
  rewardTime: { fontSize: "0.6rem" },
  rewardMessage: { fontSize: "1rem" },
} as const;

export default styles;
