const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUserListings,
} = require("../controllers/userController");
const { verifyUser } = require("../utils/verifyUser");

const router = express.Router();

// router.get("/api/user");
router.post("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);
router.get("/listing/:id", verifyUser, getUserListings);
router.get("/:id", verifyUser, getUser);

module.exports = router;
