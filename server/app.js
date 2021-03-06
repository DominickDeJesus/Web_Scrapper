require('./db/config');

const express = require('express'),
  openRoutes = require('./routes/open/tracks'),
  path = require('path'),
  addTrackToDB = require('./scrapper/index'),
  cron = require('node-cron');
const app = express();

//run the first time server starts
addTrackToDB();

//runs every day at 4pm
cron.schedule('0 16 * * *', function () {
  addTrackToDB();
  console.log('AddedTrack ran at ' + Date.now());
});

app.use(openRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

module.exports = app;
