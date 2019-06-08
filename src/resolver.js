const url = require("url");
const { parse } = require("./source");

async function get(urlpath, query, config) {
  return new Promise((resolve, reject) => {
    const segments = urlpath.split("/");
    segments.shift(); // leading slash
    const destination = segments.shift();
    const location = parse(query);
    return resolve(destination + ": " + JSON.stringify(location));
  });
}

module.exports = { get };
