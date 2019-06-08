function makeUrl(query) {
  return "www:" + JSON.stringify(query);
}

module.exports = makeUrl;
