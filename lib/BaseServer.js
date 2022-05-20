export class BaseServer {
	constructor(engine) {
		this.engine = engine({
			logger: true
		});

		this.preHandlers = [];
	}
	
	listen(port) {
		this.engine.listen({ port }, (err, address) => {
  			if (err) throw err
		});
	}

	addSessionHandler(cls) {
		this.preHandlers.push(cls.getHandler());
	}

	addFaviconHandler() {};

	addControllers(arr) {
		arr.forEach(controller => {
			const routes = controller.routes;

			routes.forEach(router => {
				this.addRoute({
					method: router.method,
					url: router.url,
					preHandler: this.preHandlers,
					handler: router.handler
					});
				}
			)
		})
	}

	addRoute(obj) {
		this.engine.route(obj);
	}
}