/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/
  // By Contrillers
  "/": { view: "pages/homepage" },
  "GET /products": "ProductsController.getProducts",
  "POST /products": "ProductsController.create",
  "DELETE /products/:id": "ProductsController.delete",
  "PUT /products/:id": "ProductsController.update",

  // By Actions
  "POST /user": { action: "user/create" },
  "GET /user": { action: "user/allusers" },
  "DELETE /user/:id": { action: "user/delete" },
  "PUT /user/:id": { action: "user/update" },
  "GET /user/:id": { action: "user/find-one" },

  // display allusers
  "GET /": "UsersController.fetchData",

  // Authentication
  "POST /login": "UserController.login",
  "POST /logout": "UserController.logout",

  // Views
  "GET /login": "ViewController.login",

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
