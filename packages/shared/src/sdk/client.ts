import { AuthResource } from "./ressources";
import { HttpClient } from "./http-client";
import { ClientOptions } from "./types/client.option";

export class Client {
  private readonly httpClient: HttpClient;

	public readonly auth: AuthResource

  constructor(options: Partial<ClientOptions> = {}) {
    this.httpClient = new HttpClient(
      options.accessToken ?? null,
      options.baseEp ?? "https://localhost:3333",
    );

		this.auth = new AuthResource(this.httpClient)
  }
}
