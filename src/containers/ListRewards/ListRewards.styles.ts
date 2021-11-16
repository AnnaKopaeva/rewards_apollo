const styles = {
  rewards: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "calc(100vh - 330px)",
    overflowY: "auto",
  },
  rewardItem: { display: "flex", flexDirection: "row", mt: 5 },
  rewardDetails: { pl: 2 },
  rewardTime: { fontSize: "0.6rem" },
  rewardMessage: { fontSize: "1rem" },
} as const;

export default styles;
