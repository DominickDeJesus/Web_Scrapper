const puppeteer = require("puppeteer"),
  $ = require("cheerio"),
  URL="https://www.oneplace.com/ministries/adventures-in-odyssey/listen",
  TAG="ul.episodesList.accordion-content li a",
  Track = require('../models/track');
require("dotenv").config();



const getURLArray = async (url, tag) => {
  try {
    const episodeURLs = [];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = await page.goto(url).then(function () {
      return page.content();
    });

    $(tag, html).each((_, item) => {
      episodeURLs.push($(item).attr("href"));
    });

    return episodeURLs;
  } catch (error) {
    console.log(error);
  }
};

const getTrackObj = async (sourceHTML) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = await page.goto(sourceHTML).then(function () {
      return page.content();
    });
    const trackObj = {}
    trackObj.url = $("audio", html).attr("src");
    trackObj.title = $("div.overlay2 h2", html).text();
    trackObj.description = $("div.description p", html).text();

    const track = new Track(trackObj);

    track.save()
    console.log(track)
  } catch (error) {
    console.log(error);
  }
};

const addTrackToDB = async () => {
  try {
    const arr = await getURLArray(URL, TAG);
    await getTrackObj(arr[0].toString());
  } catch (error) {
    console.log(error)
  }

};

module.exports = addTrackToDB;
