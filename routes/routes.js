var appRoute = function (app) {
  app.get("/", function (req, res) {
    const email = req.query.email;
    if (email) {
      res.redirect("https://google.com");
    } else {
      res.send("Hello World");
    }
  });
};

module.exports = appRoute;
