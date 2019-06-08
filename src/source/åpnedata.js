function parse(url) {
  return { semantic: url.pathname.substring(1) };
}

const parser = {
  hostname: "data.artsdatabanken.no",
  parse: parse
};

module.exports = parser;
