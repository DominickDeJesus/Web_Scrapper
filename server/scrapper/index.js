const puppeteer = require("puppeteer"),
  $ = require("cheerio");
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

const getAudioURL = async (sourceHTML) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = await page.goto(sourceHTML).then(function () {
      return page.content();
    });

    return $("audio", html).attr("src");
  } catch (error) {
    console.log(error);
  }

  return url;
};

const addTrackToDB = async () => {
  const arr = await getURLArray(process.env.URL, process.env.TAG);
  console.log(arr);
  console.log(await getAudioURL(arr[0]));
};

module.exports = addTrackToDB;
