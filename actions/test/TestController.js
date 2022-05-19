import { BaseController } from "../../lib/BaseController.js";
import { TestLinkGET } from "./test-link/TestLinkGET.js";

export class TestController extends BaseController {
	constructor(g) {
		super(g);
	}

	getHandlers() {
		return [
			this.actionRunner(TestLinkGET)
		]
	}
}