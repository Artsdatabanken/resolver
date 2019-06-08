function parse(url) {
  return { semantic: url.pathname };
}

const parser = {
  hostname: "data.artsdatabanken.no",
  parse: parse
};

module.exports = parser;
