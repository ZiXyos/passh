import deepmerge from "deepmerge";

import { request } from "./helpers/request.helper";
import { type RequestParameters } from "./types/request.option";
import { BaseResDto } from "./dto/base.res.dto";

type ReqParam = {
	endPoint: string;
} & Partial<RequestParameters>;

export class HttpClient {
	private readonly abortController = new AbortController();

	constructor(
		private readonly accessToken: string | null,
		private readonly baseUrl: string,
	) //private readonly agent: string,
	{
		console.log(baseUrl);
	}

	private async request<T>({ method, endPoint, options = {} }: ReqParam) {
		if (!method) throw new Error("method not implemented");

		const authorizationHeader =
			this.accessToken === undefined
				? {}
				: { Authorization: `Bearer ${this.accessToken}` };

		const requestOptionsBase = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				...authorizationHeader,
			},
		};

		const requestOptions = {
			...deepmerge(requestOptionsBase, options),
		};

		const url = new URL(
			endPoint,
			this.baseUrl
		)
		const response = await request<BaseResDto<T>>({
			method,
			url,
			options: requestOptions,
		});

		return response;
	}

	async get<T>({ endPoint, options = {} }: ReqParam): Promise<BaseResDto<T>> {
		return this.request<T>({
			endPoint,
			options,
			method: "GET",
		});
	}

	async post<T>({ endPoint, options = {} }: ReqParam): Promise<BaseResDto<T>> {
		return this.request<T>({
			endPoint,
			options,
			method: "POST",
		});
	}

	async put<T>({ endPoint, options = {} }: ReqParam): Promise<BaseResDto<T>> {
		return this.request<T>({
			endPoint,
			options,
			method: "PUT",
		});
	}

	async patch<T>({ endPoint, options = {} }: ReqParam): Promise<BaseResDto<T>> {
		return this.request<T>({
			endPoint,
			options,
			method: "PATCH",
		});
	}

	async delete<T>({
		endPoint,
		options = {},
	}: ReqParam): Promise<BaseResDto<T>> {
		return this.request<T>({
			endPoint,
			options,
			method: "DELETE",
		});
	}

	abobortAllRequests(): void {
		this.abortController.abort();
	}
}
