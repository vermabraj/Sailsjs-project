module.exports = {
  friendlyName: "Find one user",

  description: "Retrieve details of a specific user using an ID.",

  inputs: {
    id: {
      type: "string",
      required: true,
      description: "ID of the user to retrieve.",
    },
  },

  exits: {
    notFound: {
      description: "No user found with the specified ID.",
      responseType: "notFound",
    },
  },

  fn: async function (inputs, exits) {
    try {
      let user = await User.findOne({ id: inputs.id });

      if (!user) {
        return exits.notFound({ message: "User not found" });
      }

      return exits.success(user);
    } catch (error) {
      return exits.error(error);
    }
  },
};
