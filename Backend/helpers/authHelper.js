const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

const comparePassword = async (password, hashedPassword) => {
  const comparedPassword = await bcrypt.compare(password, hashedPassword);
  return comparedPassword;
};

module.exports = {
  hashPassword,
  comparePassword,
};
