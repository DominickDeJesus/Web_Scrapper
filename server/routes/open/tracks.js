const Track = require('../../models/track'),
  router = require('express').Router(),
  addTrackToDB = require('../../scrapper/index');

router.get('/api/tracks', async (req, res) => {
  try {
    const tracks = await Track.find({});
    res.json(tracks);
  } catch (error) {
    console.log(error);
  }
});

router.get('/api/track/today', async (req, res) => {
  try {
    const track = await addTrackToDB();
    res.status(300).json(track);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

module.exports = router;
