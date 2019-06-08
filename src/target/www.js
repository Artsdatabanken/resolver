const static = require("./www.static");
// Create urls for https://www.artsdatabanken.no

// NN-LA-M-S        =>  https://artsdatabanken.no/nin/LA/M/S
// NN-LA-KLG-REIA-1 => https://artsdatabanken.no/nin/LA/KLG/REIA/1

function makeUrl(query) {
  if (!query.kode) return null;
  if (static[query.kode]) return static[query.kode];
  console.warn(query);
  const parts = query.kode.replace("-TI", "").split("-");
  if (parts.length < 1) return null;
  let prefix = parts.shift();
  if (prefix == "NN") {
    prefix = parts.shift();
  }
  switch (prefix) {
    case "AR":
      return "https://artsdatabanken.no/Taxon/x/" + parts[0];
    case "LA":
      return "https://artsdatabanken.no/nin/LA/" + parts.join("/");
    case "NA":
      return null;
  }
  return null;
}

module.exports = makeUrl;
