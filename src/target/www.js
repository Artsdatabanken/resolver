// Create urls for https://www.artsdatabanken.no

// NN-LA-M-S        =>  https://artsdatabanken.no/nin/LA/M/S
// NN-LA-KLG-REIA-1 => https://artsdatabanken.no/nin/LA/KLG/REIA/1

const fixed = {
  NN: "https://artsdatabanken.no/Pages/179721",
  "NN-LA": "https://artsdatabanken.no/nin/landskap",
  "NN-LA-TI": "https://artsdatabanken.no/nin/landskap/typeinndeling",
  "NN-NA": "https://artsdatabanken.no/Pages/222921",
  "NN-LA-KLG": "https://artsdatabanken.no/nin/landskap/gradienter",
  "NN-LA-KLG-JP": "https://artsdatabanken.no/Pages/262120",
  "NN-LA-KLG-VP": "https://artsdatabanken.no/Pages/262126",
  "NN-LA-KLG-BP": "https://artsdatabanken.no/Pages/262117",
  "NN-LA-KLG-IP": "https://artsdatabanken.no/Pages/262119",
  "NN-LA-KLG-VE": "https://artsdatabanken.no/Pages/262125",
  "NN-LA-KLG-AIKS": "https://artsdatabanken.no/Pages/262160",
  "NN-LA-KLG-AI": "https://artsdatabanken.no/Pages/262116",
  "NN-LA-KLG-KA": "https://artsdatabanken.no/Pages/262121",
  "NN-LA-KLG-IYK": "https://artsdatabanken.no/Pages/262118",
  "NN-LA-KLG-REKS": "https://artsdatabanken.no/Pages/262124",
  "NN-LA-KLG-REIDKF": "https://artsdatabanken.no/Pages/262122",
  "NN-LA-KLG-REIA": "https://artsdatabanken.no/Pages/262123",
  "NN-NA-TI": "https://artsdatabanken.no/Pages/180023",
  "NN-NA": "https://artsdatabanken.no/Pages/222921",
  "NN-NA-LKM": "https://artsdatabanken.no/Pages/179717",
  "NN-NA-BS": "https://artsdatabanken.no/Pages/179723"
};

function makeUrl(query) {
  if (!query.kode) return null;
  if (fixed[query.kode]) return fixed[query.kode];
  console.warn(query);
  const parts = query.kode.replace("-TI", "").split("-");
  if (parts.length < 1) return null;
  let prefix = parts.shift();
  if (prefix == "NN") {
    prefix = parts.shift();
  }
  switch (prefix) {
    case "LA":
      return "https://artsdatabanken.no/nin/LA/" + parts.join("/");
    case "NA":
      return "nanana: " + parts;
  }
  return "www:" + JSON.stringify(parts);
}

module.exports = makeUrl;
