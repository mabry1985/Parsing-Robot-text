var robotsParser = require("robots-parser");
const request = require('request-promise');

const robotsUrl = "https://textfiles.meulie.net/robots.txt";

async function getRobotsTxt(robotsUrl) {
  const robotTxt = await request.get(robotsUrl);
  const robots = robotsParser(robotsUrl, robotTxt);
  console.log(robots.isAllowed("https://textfiles.meulie.net/100/", "ScraperBot"))
    console.log(
      robots.isAllowed("https://textfiles.meulie.net/100/", "rogerbot")
    );
}

var robots = robotsParser(
  "http://www.example.com/robots.txt",
  [
    "User-agent: *",
    "Disallow: /dir/",
    "Disallow: /test.html",
    "Allow: /dir/test.html",
    "Allow: /test.html",
    "Crawl-delay: 1",
    "Sitemap: http://example.com/sitemap.xml",
    "Host: example.com"
  ].join("\n")
);

getRobotsTxt(robotsUrl);