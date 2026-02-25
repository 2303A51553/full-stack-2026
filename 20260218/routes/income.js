const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({ message: "Income Data" });
});

module.exports = router;
