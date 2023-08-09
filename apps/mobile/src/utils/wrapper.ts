import { Result } from "../types";

export const wrapper = <T, R>(fn: (value: T) => R) => (
	result: Result<T>,
): Result<R> => result.ok === true 
	? { ok: true, value: fn(result.value) } 
	: result;
