const shopControllers = {
  shop: (req, res) => res.send("Route for Shop view"),
  shopItem: (req, res) => res.send("Route for Item view"),
  shopItemAdd: (req, res) => res.send("Route for Item add view"),
  cart: (req, res) => res.send("Route for Cart view"),
  checkout: (req, res) => res.send("Route for Checkout view"),
};

module.exports = shopControllers;
