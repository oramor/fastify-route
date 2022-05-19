import Fastify from "fastify";
import { BaseServer } from "./lib/BaseServer.js";

import { TestController } from "./actions/test/TestController.js";

const server = new BaseServer(Fastify);

const mainPageRoute = {
	method: 'GET',
	url: '/',
	handler: (req, res) => {
		res.send({ hello: 'world' });
	}
}

//server.addRoute(mainPageRoute);
server.addController(TestController);

server.listen(3000);