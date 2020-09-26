const Track = require("../../models/track");
const router = require("express").Router();

router.get("/api/tracks", async (req, res) => {
  try {
    console.log("hello from server");
    const tracks = await Track.find({})
    res.json(tracks)
    console.log(tracks) 
  } catch (error) {
    console.log(error)
  }

});
module.exports = router;
