const mongoose = require("mongoose");

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const data = {
  users: [
    {
      _id: user1Id,
      avatar:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      username: "user1",
      name: "User 1",
      email: "user1@gmail.com",
      password: "user11",
      info: "It's info about user 1.",
      role: "admin",
    },
    {
      _id: user2Id,
      avatar:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      username: "user2",
      name: "User 2",
      email: "user2@gmail.com",
      password: "user12",
      info: "It's info about user 2.",
    },
  ],
  rewards: [
    {
      user: user1Id,
      rewardCount: "100",
      rewardCurrency: "$",
      message: "Big thanks for your help in helping on the outage today!!!",
      createAt: 1635348000,
    },
    {
      user: user2Id,
      rewardCount: "150",
      rewardCurrency: "$",
      message:
        "Your help to show cases those scenarios really helped in closing the loop on the story.",
      createAt: 1635348000,
    },
    {
      user: user1Id,
      rewardCount: "70",
      rewardCurrency: "$",
      message: "Thanks for your help today!!!",
      createAt: 1635348000,
    },
    {
      user: user2Id,
      rewardCount: "80",
      rewardCurrency: "$",
      message: "Thanks for your help in creating the product overview deck. ",
      createAt: 1635348000,
    },
  ],
};

module.exports = data;
