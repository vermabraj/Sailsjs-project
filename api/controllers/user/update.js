module.exports = {
  friendlyName: "Update user",

  description: "Update user details by ID.",

  inputs: {
    id: {
      type: "string",
      required: true,
      description: "ID of the user to update.",
    },
    name: {
      type: "string",
      description: "New name for the user.",
    },
    email: {
      type: "string",
      isEmail: true,
      description: "New email for the user.",
    },
    // ... any other fields you wish to update.
  },

  exits: {
    notFound: {
      responseType: "notFound",
    },
  },

  fn: async function (inputs, exits) {
    // Find the user first
    let user = await User.findOne({ id: inputs.id });

    // Check if the user exists
    if (!user) {
      return exits.notFound({ message: "User not found." });
    }

    // Update the user
    try {
      let updatedUser = await User.updateOne({ id: inputs.id }).set({
        name: inputs.name,
        email: inputs.email,
        // ... other updated fields
      });
      return exits.success(updatedUser);
    } catch (error) {
      return exits.error(error);
    }
  },
};
