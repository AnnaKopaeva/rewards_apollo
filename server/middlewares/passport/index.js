const GraphqlStrategy = require("./strategies");
const User = require("../../database/models/user");

exports.init = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });

  passport.use(
    "graphql",
    new GraphqlStrategy(({ email, password }, done) => {
      User.findOne({ email }, (error, user) => {
        if (error) {
          done(error);
        }
        if (!user) {
          done(null, false);
        }

        user.validatePassword(password, (error, isMatching) => {
          if (error) {
            return done(error);
          }
          if (!isMatching) {
            return done(null, false);
          }
          return done(null, user);
        });
      });
    })
  );
};
