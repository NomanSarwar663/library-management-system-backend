const { router } = require("../app");
const bookActionController = require("../controllers/bookAction.controller");
const { requireSignin } = require("../middleware/authorization");

router.post("/:id/check-in", requireSignin, bookActionController.checkIn);
router.post("/:id/check-out", requireSignin, bookActionController.checkOut);

module.exports = router;
