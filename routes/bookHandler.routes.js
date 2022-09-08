const { router } = require("../app");
const bookHandlingController = require("../controllers/bookHandler.controller");
const { requireSignin } = require("../middleware/authorization");

router.get(
  "/book/:id/checked-out-details",
  requireSignin,
  bookHandlingController.getcheckedOutDetails
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
