import Fastify from "fastify";
import { BaseServer } from "./lib/BaseServer.js";
import { TestController } from "./actions/test/TestController.js";
import { SessionHandler } from "./handlers/SessionHandler.js.js";

const server = new BaseServer(Fastify);

const mainPageRoute = {
	method: 'GET',
	url: '/',
	handler: (req, res) => {
		res.send({ hello: 'world' });
	}
}

server.addSessionHandler(SessionHandler);

server.addControllers([
	new TestController
])

server.listen(3000);