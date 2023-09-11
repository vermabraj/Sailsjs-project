module.exports = {
  friendlyName: "Get all users",

  description: "Retrieve a list of all users from the system.",

  exits: {
    success: {
      description: "Successfully retrieved users.",
      responseType: "ok",
    },
    serverError: {
      description: "Unexpected error occurred.",
      responseType: "serverError",
    },
  },

  fn: async function (_, exits) {
    try {
      const users = await User.find();
      return exits.success(users);
    } catch (error) {
      sails.log.error("Error fetching users:", error);
      return exits.serverError({ message: "Unexpected error occurred." });
    }
  },
};
