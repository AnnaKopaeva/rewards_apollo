const styles = {
  feed: {
    mt: 4,
    position: "relative",
  },
  addBtn: {
    minWidth: "50px",
    height: "50px",
    position: "absolute",
    top: "18px",
    right: "20px",
    border: "1px solid",
    borderRadius: "50%",
    padding: 0,
    bgcolor: "primary.contrastText",

    "&:hover": {
      bgcolor: "primary.contrastText",
      boxShadow: 2,
    },
  },
} as const;

export default styles;
