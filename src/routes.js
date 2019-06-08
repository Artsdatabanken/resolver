const resolver = require("./resolver");

module.exports = function(app, config) {
  app.get("/", (req, res) => {
    res.send(config.json);
  });
  app.get("*?", (req, res, next) => {
    const relPath = decodeURIComponent(req.path);
    resolver
      .get(relPath, req.query, config)
      .then(node => {
        console.log(node);
        if (!node) return next();
        //        res.setHeader("Content-Type", node.contentType);
        res.send(node);
      })
      .catch(err => {
        next(err);
      });
  });
};
