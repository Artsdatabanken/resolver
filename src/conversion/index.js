const semantiskUrlTilKode = require("./semantiskUrlTilKode");

function convert(query, config) {
  console.log(Object.keys(config.map.semantiskUrlTilKode).length);
  if (query.semantic)
    query.kode = config.map.semantiskUrlTilKode[query.semantic];
  return query;
}

module.exports = convert;
