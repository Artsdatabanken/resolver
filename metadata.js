const fs = require("fs");

function read(metadatapath) {
  const raw = fs.readFileSync(metadatapath);
  const json = JSON.parse(raw);
  const r = { semantiskTilKode: {}, kodeTilSemantisk: {} };
  Object.keys(json).forEach(kode => {
    const meta = json[kode];
    r.semantiskTilKode[meta.url] = meta.kode;
    r.kodeTilSemantisk[meta.kode] = meta.url;
  });
  return r;
}

module.exports = read;
