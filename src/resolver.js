const { parse } = require("./source");
const target = require("./target");
const convert = require("./conversion");

async function get(urlpath, query, config) {
  return new Promise((resolve, reject) => {
    const segments = urlpath.split("/");
    segments.shift(); // leading slash
    const targetDomain = segments.shift();
    const source = parse(query);
    const resource = convert(source);
    const targetUrl = target.parse(targetDomain, resource);
    return resolve(
      targetDomain + ": " + JSON.stringify(resource) + " // " + targetUrl
    );
  });
}

module.exports = { get };
