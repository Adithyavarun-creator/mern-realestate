const express = require("express");
const {
  signup,
  signin,
  googlesignin,
  signOut,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/googlesignin", googlesignin);
router.get("/signout", signOut);

module.exports = router;
