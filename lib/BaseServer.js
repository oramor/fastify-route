export class BaseServer {
	constructor(engine) {
		this.engine = engine({
			logger: true
		});
	}
	
	listen(port) {
		this.engine.listen({ port }, (err, address) => {
  			if (err) throw err
		});
	}

	addGlobalContext() {}

	addController(arr) {
		arr.forEach(handler => {
			// this.addRoute
		});
	}

	addRoute(obj) {
		const router = this.engine.route(obj);
	}
}