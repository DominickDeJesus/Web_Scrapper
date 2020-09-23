const puppeteer = require("puppeteer");
const $ = require("cheerio");
const url = "https://www.oneplace.com/ministries/adventures-in-odyssey/listen/";
const tag = "ul.episodesList.accordion-content li a";

const getURLArray = async () => {
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

const main = async () => {
  const arr = await getURLArray();
  console.log(arr);
  //   const array = arr.map(async (element) => {
  //     return await getAudioURL(element);
  //   });

  console.log(await getAudioURL(arr[0]));
  //   console.log(array);
};

main();
