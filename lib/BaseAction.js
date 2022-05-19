export class BaseAction {
	static sendJson(obj) {
		return {
			json: obj,
			httpStatus: 200
		}
	}
}