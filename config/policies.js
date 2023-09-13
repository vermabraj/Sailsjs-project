/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

// config/policies.js

// config/policies.js

module.exports.policies = {
  // Global default policy (applies to every action unless overridden)
  // SomeController: {
  //   protectedAction: "verifyToken",
  // },

  User: {
    // allusers: 'isAuthenticated',
    get: 'isAuthenticated',
    // create: "isAuthenticated",
    update: "isAuthenticated",
    delete: "isAuthenticated",
  },
};
