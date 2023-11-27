const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminController");

router.get("/", adminControllers.admin);
router.get("/create", adminControllers.adminCreateGet);
router.post("/create", adminControllers.adminCreatePost);
router.get("/edit/:id", adminControllers.editGet);
router.put("/edit/:id", adminControllers.editPost);
router.delete("/delete/:id", adminControllers.delete);

module.exports = router;
