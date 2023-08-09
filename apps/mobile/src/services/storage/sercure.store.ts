import { getItemAsync, setItemAsync } from "expo-secure-store"
import { Result } from "../../types/error.type";


const storeValue = async <T>( key: string, value: string ) => {

	await setItemAsync(key, value);
}

const getStoredValue = async (key: string): Promise<Result<string>> => {

	let res = await getItemAsync(key);
	return res ? {
		ok: true,
		value: res
	} : { 
		ok: false, 
		error: new Error(`no item related to the key: ${key}`)
	}
}

export {
	storeValue,
	getStoredValue
}
