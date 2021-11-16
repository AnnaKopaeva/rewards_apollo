const styles = {
  avatar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mr: 8,
    "@media screen and (max-width: 460px)": {
      mr: 2,
    },
  },
  name: { fontSize: "1rem", mt: 1, minWidth: "115px", minHeight: "24px" },
} as const;

export default styles;
