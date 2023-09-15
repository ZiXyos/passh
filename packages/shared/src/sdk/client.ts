import { HttpClient } from "./http-client";
import { ClientOptions } from "./types/client.option";

export class Client {
	private readonly httpClient: HttpClient;

	constructor(
		options: Partial<ClientOptions> = {}
	) {		

		this.httpClient = new HttpClient(
			options.accessToken ?? null,
			options.baseEp ?? '',
			options.userAgent ?? 'agent'
		)
	}
}
