const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/most-popular", (req, res) => {
  const product = {
    label: "maïss",
    price: 7000,
    currency: "GNF",
    unity: "KG",
    last_update_date: new Date(),
  };
  res.jsonp(product);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(59000, () => {
  console.log("JSON Server is running");
});
