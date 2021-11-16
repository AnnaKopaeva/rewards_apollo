import * as React from "react";

import Typography from "@mui/material/Typography";

import { CURRENCY } from "../../constants";

import styles from "./Money.styles";

interface MoneyProps {
  value: number;
  currency?: CURRENCY;
}

const Money: React.FC<MoneyProps> = ({ value, currency = CURRENCY.dollar }) => {
  return (
    <>
      <Typography sx={styles.count}>
        {value}
        {currency}
      </Typography>
    </>
  );
};

export default Money;
