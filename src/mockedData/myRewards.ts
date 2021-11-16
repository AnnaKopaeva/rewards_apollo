import { RewardEntity } from "../interfaces/RewardEntity";

const myRewards: RewardEntity[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Leanne Graham",
    },
    userBy: {
      id: 4,
      name: "Patricia Lebsack",
    },
    rewardCount: 40,
    rewardCurrency: "$",
    time: 1635348000,
    message: "Big thanks for your work today.",
  },
  {
    id: 2,
    user: {
      id: 1,
      name: "Leanne Graham",
    },
    userBy: {
      id: 2,
      name: "Ervin Howell",
    },
    rewardCount: 80,
    rewardCurrency: "$",
    time: 1635345010,
    message: "Thanks for your help in creating the product overview deck.",
  },
  {
    id: 3,
    user: {
      id: 1,
      name: "Leanne Graham",
    },
    userBy: {
      id: 4,
      name: "Patricia Lebsack",
    },
    rewardCount: 70,
    rewardCurrency: "$",
    time: 1635348000,
    message: "Big thanks for your work today.",
  },
];

export default myRewards;
