import dayjs from "dayjs";
import { useSelector } from "react-redux";

import { RewardEntity } from "../../interfaces/RewardEntity";
import { selectProfileData } from "../../store/profile/selectors";

const useRewardModal = () => {
  const profile = useSelector(selectProfileData);

  const onSubmit = (values: RewardEntity) => {
    console.log(values);
  };

  const initialReward: RewardEntity = {
    id: Date.now(),
    user: null,
    rewardCount: "",
    rewardCurrency: "$",
    message: "",
    time: dayjs().unix(),
    userBy: profile,
  };

  return {
    initialReward,
    onSubmit,
  };
};

export default useRewardModal;
