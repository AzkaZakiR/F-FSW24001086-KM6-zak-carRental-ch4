const router = require("express").Router();

const Car = require("./carRoutes");
// const CustomerAdmin = require("./customerAdminRouter");

// router.use("/api/v1/customers", Customer);
// router.use("/customers", CustomerAdmin);
router.use("/car", Car)

module.exports = router;
