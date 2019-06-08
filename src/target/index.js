const www = require("./www");

const sources = {
  www: www
};

function getUrl(targetDomain, query) {
  const makeUrl = sources[targetDomain];
  if (!makeUrl) return null;
  const targetUrl = makeUrl(query);
  return targetUrl;
}

module.exports = { parse: getUrl };
