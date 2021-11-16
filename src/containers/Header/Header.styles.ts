const styles = {
  header: { display: "flex", alignItems: "center" },
  details: { display: "flex", flexDirection: "row" },
  block: {
    mr: 10,
    "@media screen and (max-width: 460px)": {
      mr: 2,
    },
  },
} as const;

export default styles;
