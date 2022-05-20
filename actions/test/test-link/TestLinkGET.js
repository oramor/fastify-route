import { BaseAction } from "../../../lib/BaseAction.js";

export class TestLinkGET extends BaseAction {
	static async run() {
		const json = { message: 'Hello World' };
		return this.sendJson(json);
	}
}