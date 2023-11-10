const express = require("express");
const {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getSearchListings,
} = require("../controllers/listingController");
const { verifyUser } = require("../utils/verifyUser");

const router = express.Router();

router.post("/create-listing", verifyUser, createListing);
router.delete("/delete/:id", verifyUser, deleteListing);
router.post("/update-listing/:id", verifyUser, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getSearchListings);

module.exports = router;
