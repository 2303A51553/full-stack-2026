const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({ message: "Dashboard Data" });
});

module.exports = router;
