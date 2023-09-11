module.exports = {
  friendlyName: "Create user",

  description: "Create a new user.",

  inputs: {
    // Define any expected inputs here, for instance:
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      isEmail: true,
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
   
  },

  exits: {
    success: {
      description: "User was created successfully.",
    },
    error: {
      description: "Failed to create a user.",
    },
  },

  fn: async function (inputs, exits) {
    
    

    try {
      let newUser = await User.create({
        name: inputs.name,
        email: inputs.email,
        password: inputs.password
      }).fetch();
      return exits.success(newUser);
    } catch (err) {
      return exits.error(err);
    }
  },
};
