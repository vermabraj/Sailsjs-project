/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */
const MongoStore = require("connect-mongo");
module.exports.session = {
  /***************************************************************************
   *                                                                          *
   * Session secret is automatically generated when your new app is created   *
   * Replace at your own risk in production-- you will invalidate the cookies *
   * of your users, forcing them to log in again.                             *
   *                                                                          *
   ***************************************************************************/
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // sets the session to last 24 hours
  },

  secret: "285997d39c7ba5d19d0f7ccd40fd608d",

  // adapter: "mongo",
  // url: "mongodb://0.0.0.0:27017/sailscrudapp",
  // collections: "sessions",

  store: new MongoStore({
    mongoUrl: "mongodb://0.0.0.0:27017/sailscrudapp",
    collection: "sessions",
  }),
  /***************************************************************************
   *                                                                          *
   * Customize when built-in session support will be skipped.                 *
   *                                                                          *
   * (Useful for performance tuning; particularly to avoid wasting cycles on  *
   * session management when responding to simple requests for static assets, *
   * like images or stylesheets.)                                             *
   *                                                                          *
   * https://sailsjs.com/config/session                                       *
   *                                                                          *
   ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },
};
