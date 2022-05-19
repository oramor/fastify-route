import Fastify from "fastify";
import { BaseServer } from "./lib/BaseServer.js";

const server = new BaseServer(Fastify);
server.listen(3000);

const mainPageRoute = {
	method: 'GET',
	url: '/',
	handler: (req, res) => {
		res.send({ hello: 'world' });
	}
}

server.addRoute(mainPageRoute);