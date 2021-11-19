import { UserEntity } from "./UserEntity";

export interface RewardEntity {
  _id: number;
  message: string;
  rewardCount: number;
  rewardCurrency: string;
  createAt?: number;
  user: Partial<UserEntity>;
  userBy: Partial<UserEntity>;
}
