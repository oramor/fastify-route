export class BaseController {
	constructor(g) {
		this.g = g;
	}

	actionRunner(action) {
		return async (req, res) => {
			console.log(this.testGlobalContext);
			try {
				const result = await action.run();

				if (result.json) {
					return res.send({ hello: 'world' });
				}

				throw new Error('AppError: Unhandler response');
			} catch(err) {
				console.log(err.message);
			}
		}
	}
}