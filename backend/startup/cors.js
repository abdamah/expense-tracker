const corrs = require("cors");

module.exports = function (app) {
  app.use(corrs());
};
