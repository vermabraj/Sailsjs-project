// api/models/User.js
const bcrypt = require("bcryptjs");

module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },

  beforeCreate: async function (valuesToSet, proceed) {
    if (valuesToSet.password) {
      valuesToSet.password = await sails.helpers.hashPassword(
        valuesToSet.password
      );
    }
    return proceed();
  },
};

