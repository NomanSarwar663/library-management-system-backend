const { router } = require("../app");
const bookHandlingController = require("../controllers/bookHandler.controller");
const { requireSignin } = require("../middleware/authorization");

router.get(
  "/book/:id/issued-details",
  requireSignin,
  bookHandlingController.getIssuedDetails
);
router.post(
  "/book/:id/check-in",
  requireSignin,
  bookHandlingController.checkIn
);
router.post(
  "/book/:id/check-out",
  requireSignin,
  bookHandlingController.checkOut
);

module.exports = router;
