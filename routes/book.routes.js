const { router } = require("../app");
const bookController = require("../controllers/book.controller");
const { requireSignin } = require("../middleware/authorization");

router.post("/register-book", requireSignin, bookController.registerBook);
router.get("/books", requireSignin, bookController.getAllBooks);
router.get("/book/:id", requireSignin, bookController.getBookDetails);

module.exports = router;
