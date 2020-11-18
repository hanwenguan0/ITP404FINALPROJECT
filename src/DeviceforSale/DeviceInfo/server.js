const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("src/DeviceforSale//DeviceInfo/DeviceList.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use("/shopping", router);

server.listen(port);
