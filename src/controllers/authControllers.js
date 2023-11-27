const authControllers = {
  loginGet: (req, res) => res.send("Route for login get view"),
  loginPost: (req, res) => res.send("Route for login post view"),
  registerGet: (req, res) => res.send("Route for register get view"),
  registerPost: (req, res) => res.send("Route for register post view"),
  logout: (req, res) => res.send("Route for logout view"),
};

module.exports = authControllers;
