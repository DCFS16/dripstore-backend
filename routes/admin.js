const express = require("express");
const { list, form } = require("../controllers/admin/product.controllers");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Wellcome to the DripStore ADMIN");
});

router.get("/products", list);
router.get("/products/new", form);

module.exports = router;
