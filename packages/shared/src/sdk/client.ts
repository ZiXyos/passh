import { HttpClient } from "./http-client";
import { ClientOptions } from "./types/client.option";

export class Client {
	private readonly httpClient: HttpClient;

	constructor(
		options: Partial<ClientOptions> = { userAgent: 'agent'}
	) {
		this.httpClient = new HttpClient(
			options.accessToken,
			options.baseEp,
			options.userAgent
		)
	}
}
