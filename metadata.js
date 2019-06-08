const fs = require("fs");

function read(metadatapath) {
  const raw = fs.readFileSync(metadatapath);
  const json = JSON.parse(raw);
  const r = { semantiskUrlTilKode: {}, kodeTilSemantiskUrl: {} };
  Object.keys(json).forEach(kode => {
    const meta = json[kode];
    r.semantiskUrlTilKode[meta.url] = meta.kode;
    r.kodeTilSemantiskUrl[meta.kode] = meta.url;
  });
  return r;
}

module.exports = read;
