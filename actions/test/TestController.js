import { BaseController } from "../../lib/BaseController.js";
import { TestURI as urls } from "./TestURI.js";
import { TestLinkGET } from "./test-link/TestLinkGET.js";

export class TestController extends BaseController {
	constructor(g) {
		super(g);
	}

	// Or make this class iterable
	get routes() {
		return [
			this.testLinkGetHandler,
		]
	}

	get testLinkGetHandler() {
		return {
			method: 'GET',
			url: urls.testPage,
			handler: this.actionRunner(TestLinkGET)
		}
	}
}