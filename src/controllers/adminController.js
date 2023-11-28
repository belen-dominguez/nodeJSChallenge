const adminControllers = {
  admin: (req, res) => res.render("pages/admin/admin"),
  adminCreateGet: (req, res) => res.render("pages/admin/create"),
  adminCreatePost: (req, res) => res.send("Route for admin create view"),
  editGet: (req, res) => res.render("pages/admin/edit"),
  editPost: (req, res) => res.send("Route for edit item view"),
  delete: (req, res) => res.send("Route for delete item view"),
};

module.exports = adminControllers;
