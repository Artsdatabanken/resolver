const semantiskUrlTilKode = require("./semantiskUrlTilKode");

function convert(query) {
  return { a: 2, ...query };
}

module.exports = convert;
