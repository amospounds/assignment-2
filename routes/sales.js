var express = require("express");
var router = express.Router();

var salesController = require("../controller/sales");
/* GET home page. */
router.get("/", salesController.getAllPosts);


router.post("/", salesController.createAPost);

router.get("/:id/delete", salesController.deleteAPost);

// get record details
router.get("/:id/edit", salesController.editAPost);

// update record
router.post("/:id/edit", salesController.updateAPost);

// http://localhost:3000/blog/1/delete

// get post delete
// delete
// update
// router.post("/", blogController.createAPost);

// get post delete

module.exports = router;
