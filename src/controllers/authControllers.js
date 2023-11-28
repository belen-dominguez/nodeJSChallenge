const authControllers = {
  loginGet: (req, res) => res.render("pages/admin/login"),
  loginPost: (req, res) => res.send("Route for login post view"),
  registerGet: (req, res) => res.render("pages/admin/register"),
  registerPost: (req, res) => res.send("Route for register post view"),
  logout: (req, res) => res.send("Route for logout view"),
};

module.exports = authControllers;
