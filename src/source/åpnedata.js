// Extracts identifier from https://data.artsdatabanken.no urls

function parse(url) {
  const parts = url.pathname.split("/");
  if (parts.length < 1) return null;
  if (parts[0] == "") parts.shift();
  if (parts[parts.length - 1] == "") parts.pop();
  console.log(parts);
  return { semantic: parts.join("/") };
}

const parser = {
  hostname: "data.artsdatabanken.no",
  parse: parse
};

module.exports = parser;
