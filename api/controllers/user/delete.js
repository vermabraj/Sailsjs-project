module.exports = {
  friendlyName: "Delete user",

  description: "Delete a user by ID.",

  inputs: {
    id: {
      type: "string",
      required: true,
      description: "The ID of the user to delete.",
    },
  },

  exits: {
    notFound: {
      responseType: "notFound",
    },
    success: {
      description: "User was deleted successfully.",
    },
  },

  fn: async function (inputs, exits) {
    // Fetch the user to check if it exists
    let user = await User.findOne({ id: inputs.id });
    if (!user) {
      return exits.notFound();
    }

    // Delete the user
    await User.destroyOne({ id: inputs.id });

    return exits.success({ message: "User was deleted successfully." });
  },
};
