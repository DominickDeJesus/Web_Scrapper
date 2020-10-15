const Track = require('../../db/models/track'),
  router = require('express').Router(),
  addTrackToDB = require('../../scrapper/index');

// ***********************************************//
// Get all tracks
// tracks?limit=10&skip=10
// tracks?sortBy=createdAt:asc
// ***********************************************//
router.get('/api/tracks', async (req, res) => {
  try {
    let limit = 10,
      skip = 0;
    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(':');
      sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    }
    if (req.query.limit) limit = parseInt(req.query.limit);
    if (req.query.skip) skip = parseInt(req.query.skip);
    const tracks = await Track.find({})
      .skip(skip)
      .limit(limit)
      .sort('-createdOn');
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
