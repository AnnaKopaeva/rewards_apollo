const { Strategy } = require("passport-strategy");

class GraphqlStrategy extends Strategy {
  constructor(verify) {
    super();

    if (!verify) {
      throw new Error("Graphql strategies requires a verify callback!");
    }

    this.verify = verify;
    this.name = "graphql";
  }

  authenticate(_, options) {
    const done = (err, user, info) => {
      if (err) {
        return this.error(err);
      }
      if (!user) {
        return this.fail(401);
      }
      return this.success(user, info);
    };

    this.verify(options, done);
  }
}

module.exports = GraphqlStrategy;
