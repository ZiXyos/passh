import { Result } from '../types/error.type';

const encryptPass = async (_password: string): Promise<Result<string>> => {
	return {
		ok: false,
		error: new Error("function not implemented")
	}
}

const decryptPass = async (_hashedValue: string): Promise<Result<string>> => {

	return {
		ok: false,
		error: new Error("function not implemented")
	}
}

export {
	encryptPass,
	decryptPass
}
