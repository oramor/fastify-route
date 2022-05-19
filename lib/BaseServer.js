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

	addToGlobalContext() {}

	addRoute(obj) {
		const router = this.engine.route(obj);
	}
}