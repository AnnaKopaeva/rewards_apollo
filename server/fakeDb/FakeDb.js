const { rewards, users } = require("./data");

const Rewards = require("../database/models/rewards");
const User = require("../database/models/user");

class FakeDb {
  async clean() {
    await User.deleteMany({});
    await Rewards.deleteMany({});
  }

  async add() {
    await User.create(users);
    await Rewards.create(rewards);
  }

  async populate() {
    await this.clean();
    await this.add();
  }
}

module.exports = new FakeDb();
