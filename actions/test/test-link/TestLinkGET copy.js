import { BaseAction } from "../../../lib/BaseAction.js";

export class TestLinkGET extends BaseAction {
	static get method() {
		return 'GET';
	}
	
	static get url() { 
		return '/test-link';
	}
	
	// Fabric method
	static get handler() {
		return async (request, reply) => {
			function sleep(ms) {
  				return new Promise(resolve => setTimeout(resolve, ms));
			};

			await sleep(5000);
		}
	}
}