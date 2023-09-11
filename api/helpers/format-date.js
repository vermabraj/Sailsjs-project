const moment = require("moment");

module.exports = {
  friendlyName: "Format date",

  description: "Return a formatted date string.",

  inputs: {
    date: {
      type: "ref",
      description: "The date object or string to be formatted.",
      required: true,
    },
  },

  exits: {
    success: {
      description: "Date formatted successfully.",
    },
  },

  fn: function (inputs, exits) {
    // Use moment to format the date
    const formattedDate = moment(inputs.date).format("DD/MM/YYYY");
    return exits.success(formattedDate);
  },
};
