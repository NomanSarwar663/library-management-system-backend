const { router } = require("../app");
const bookHandlerController = require("../controllers/bookHandler.controller");
const { requireSignin } = require("../middleware/authorization");

router.post("/:id/check-in", requireSignin, bookHandlerController.checkIn);
router.post("/:id/check-out", requireSignin, bookHandlerController.checkOut);

module.exports = router;
