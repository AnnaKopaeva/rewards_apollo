const passport = require("passport");

const authenticateUser = (req, options) => {
  return new Promise((resolve, reject) => {
    const done = (error, user) => {
      if (error) {
        return reject(new Error(error));
      }
      if (user) {
        req.login(user, (error) => {
          if (error) {
            return reject(error);
          }
          return resolve(user);
        });
      } else {
        return reject(new Error("Invalid email or password!"));
      }
    };

    const authFn = passport.authenticate("graphql", options, done);
    authFn();
    return true;
  });
};

exports.buildAuthContext = (req) => {
  const auth = {
    authenticate: (options) => authenticateUser(req, options),
    logout: () => req.logout(),
    isAuthenticated: () => req.isAuthenticated(),
    getUser: () => req.user,
  };

  return auth;
};
