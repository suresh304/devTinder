const validator = require("validator");

const validateSignup = (req) => {
  console.log("validator started...");

  const { firstName, lastName, email, password } = req.body;

  if (!firstName && !lastName) {
    throw new Error("Enter valid credentials: first name or last name is required.");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid email.");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password.");
  }
};

module.exports = {
  validateSignup
};
