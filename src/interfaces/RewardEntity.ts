import { UserEntity } from "./UserEntity";

export interface RewardEntity {
  id: number;
  time: number;
  message: string;
  rewardCount: number | string;
  rewardCurrency: string;
  user: Partial<UserEntity>;
  userBy: Partial<UserEntity>;
}
