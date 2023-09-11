// api/controllers/UserController.js

const axios = require("axios"); // First, install Axios: npm install axios

module.exports = {
  async fetchData(req, res) {
    try {
      const response = await axios.get("http://localhost:1337/user");
      const users = response.data;

      return res.view("pages/homepage", { users: users });
    } catch (error) {
      return res.serverError(error);
    }
  },
};
