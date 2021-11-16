import * as Yup from "yup";

const MAX_LENGTH = 10;
const MAX_ERROR_MESSAGE = `Should be less that ${MAX_LENGTH} symbols`;

export const RewardSchema = Yup.object().shape({
  user: Yup.object().shape({ name: Yup.string() }).required("User is required").nullable(),
  rewardCount: Yup.string().max(MAX_LENGTH, MAX_ERROR_MESSAGE).required("Reward is required"),
});
