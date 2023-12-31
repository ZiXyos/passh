import { type Methods } from "../types/method.type";

export type ErrorResDto = {
	status: "failure";
	statusCode: number;
	error: string;
	message: string | string[];
	timestamp: string;
	path: string;
	method: Methods;
};

export type SuccessResDto<T> = {
	data: T;
	status: "sucess";
};

export type BaseResDto<T> = SuccessResDto<T> | ErrorResDto;
