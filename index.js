const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();


server.use(cors());
server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);

server.listen(2020, () => {
  console.log("JSON Server is running on port 2020");
});