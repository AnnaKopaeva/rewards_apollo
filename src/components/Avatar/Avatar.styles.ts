import { SIZE } from "../../constants";

const styles = (size: SIZE) => ({
  avatar: {
    bgcolor: "grey.A200",
    ...(size === SIZE.s ? { width: 40, height: 40 } : { width: 100, height: 100 }),
  },
  icon: {
    color: "grey.A400",
    ...(size === SIZE.s ? { fontSize: "1.25rem" } : { fontSize: "2.5rem" }),
  },
});

export default styles;
