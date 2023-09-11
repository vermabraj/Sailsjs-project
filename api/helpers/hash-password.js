// api/helpers/hash-password.js

const bcrypt = require("bcrypt");

module.exports = {
  friendlyName: "Hash password",

  description: "Hash a provided password using bcrypt.",

  inputs: {
    password: {
      type: "string",
      required: true,
      description: "The password to be hashed.",
    },
  },

  exits: {
    success: {
      description: "Password hashed successfully.",
    },
  },

  fn: async function (inputs, exits) {
    const hashedPassword = await bcrypt.hash(inputs.password, 12); // '12' is the salt rounds
    return exits.success(hashedPassword);
  },
};
