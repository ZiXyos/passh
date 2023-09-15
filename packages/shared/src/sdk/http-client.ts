import { Methods } from "./types/method.type";
import { signinReqSchema } from "../..";
import { RequestOptions } from './types/request.option'


export class HttpClient {
  constructor(
    private readonly accessToken: string | null,
    private readonly baseUrl: string,
		private readonly agent: string,
  ) {}

  private async request<T>(
    method: Methods,
    route: string,
    options: Partial<RequestOptions> = {},
  ) {
    const authorizationHeader =
      this.accessToken === undefined
        ? {}
        : { Authorization: `Bearer ${this.accessToken}` }

		const requestOptionsBase = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': this.agent,
				...authorizationHeader,
			},
		}

		const requestOptions = {
			requestOptionsBase
		}

		const _url = new URL(route, this.baseUrl)
  }
}
