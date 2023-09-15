import { Methods } from "./method.type"

export interface RequestOptions {
	headers: Record<string, string>
	body: Record<string, unknown>
	signal: AbortSignal
	validateStatus: (status: number) => boolean
}

export type RequestParameters = {
  method: Methods;
  url: URL;
  options: Partial<RequestOptions>;
};
