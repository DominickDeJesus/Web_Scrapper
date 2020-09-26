const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("hello from server");
  res.status(300).json({ msg: "hello" });
});
module.exports = router;
