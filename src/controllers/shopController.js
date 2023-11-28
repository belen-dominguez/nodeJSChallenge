const shopControllers = {
  shop: (req, res) => res.render("pages/shop/shop"),
  shopItem: (req, res) => res.render("pages/shop/item"),
  shopItemAdd: (req, res) => res.send("Route for Item add view"),
  cart: (req, res) => res.render("pages/shop/cart"),
  checkout: (req, res) => res.send("Route for Checkout view"),
};

module.exports = shopControllers;
