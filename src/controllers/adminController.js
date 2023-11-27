const adminControllers = {
  admin: (req, res) => res.send("Route for Admin view"),
  adminCreateGet: (req, res) => res.send("Route for admin create view"),
  adminCreatePost: (req, res) => res.send("Route for admin create view"),
  editGet: (req, res) => res.send("Route for edit item view"),
  editPost: (req, res) => res.send("Route for edit item view"),
  delete: (req, res) => res.send("Route for delete item view"),
};

module.exports = adminControllers;
