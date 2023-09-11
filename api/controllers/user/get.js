module.exports = {
  friendlyName: "Get user",

  description: "Retrieve details of a user by ID.",

  inputs: {
    id: {
      description: "The ID of the user to look up.",
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "pages/user/view",
    },
    notFound: {
      description: "No user with the specified ID was found in the database.",
      responseType: "notFound",
    },
  },

  fn: async function (inputs, exits) {
    var user = await User.findOne({ id: inputs.id });

    if (!user) {
      return exits.notFound();
    }

    return exits.success({ user: user });
  },
};
