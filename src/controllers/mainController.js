const mainControllers = {
  home: (req, res) => res.render("pages/index"),
  contact: (req, res) => res.render("pages/shop/contact"),
  about: (req, res) => res.send("Route for About view"),
  faqs: (req, res) => res.send("Route for Faqs view"),
};

module.exports = mainControllers;
