class User {
  constructor(model) {
    this.Model = model;
  }

  signIn() {
    return "Sign In";
  }
  signUp(signUpData) {
    console.log(signUpData);
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error("The password must be the same as confirmation password!");
    }
    return this.Model.create(signUpData);
  }
  signOut() {
    return "Sign out";
  }
}

module.exports = User;
