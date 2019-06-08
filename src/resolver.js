const { parse } = require("./source");
const target = require("./target");

async function get(urlpath, query, config) {
  return new Promise((resolve, reject) => {
    const segments = urlpath.split("/");
    segments.shift(); // leading slash
    const targetDomain = segments.shift();
    const location = parse(query);
    const targetUrl = target.parse(targetDomain, location);
    return resolve(
      targetDomain + ": " + JSON.stringify(location) + " // " + targetUrl
    );
  });
}

module.exports = { get };
