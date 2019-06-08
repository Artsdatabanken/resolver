const url = require("url");
const åpnedata = require("./åpnedata");

const sources = {
  [åpnedata.hostname]: åpnedata
};

function parse(query) {
  const source = decodeURIComponent(query.ref);
  if (!source) return null;
  const srcUrl = url.parse(source);
  const host = srcUrl.hostname;
  const parser = sources[host];
  if (!parser) return null;
  const parsed = parser.parse(srcUrl);
  return parsed;
}

module.exports = { parse };
