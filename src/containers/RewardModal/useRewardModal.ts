import { useSelector } from "react-redux";

import { RewardEntity } from "../../interfaces/RewardEntity";
import { selectProfileData } from "../../store/profile/selectors";

const useRewardModal = () => {
  const profile = useSelector(selectProfileData);

  const initialReward: RewardEntity = {
    _id: Date.now(),
    user: null,
    rewardCount: 0,
    rewardCurrency: "$",
    message: "",
    userBy: profile,
  };

  return {
    initialReward,
  };
};

export default useRewardModal;
