export class SessionHandler {
	static getHandler(g) {
		return async (req, res, done) => {
			function sleep(ms) {
				return new Promise(resolve => setTimeout(resolve, ms));
			}

			await sleep(5000);

			if (true) {
				return res.send({ err: 'NOT AUTH' });
			}
			done();
		}
	}
}