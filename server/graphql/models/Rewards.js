class Rewards {
  constructor(model) {
    this.Model = model;
  }

  async getAll() {
    return this.Model.find({});
  }

  async getById(id) {
    return this.Model.findById(id);
  }

  async create(data) {
    return this.Model.create(data);
  }

  async findAndUpdate(id, data) {
    return this.Model.findOneAndUpdate({ _id: id }, data, { new: true, runValidators: true });
  }
}

module.exports = Rewards;
