require('./db/config');

const express = require('express'),
  openRoutes = require('./routes/open/tracks'),
  path = require('path'),
  addTrackToDB = require('./scrapper/index'),
  cron = require('node-cron');
const app = express();

try {
  cron.schedule('0 0 * * *', function () {
    addTrackToDB();
    console.log('AddedTrack ran at ' + Date.now());
  });
} catch (error) {
  console.log(error);
}

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
