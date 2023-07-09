import { getItemAsync, setItemAsync } from "expo-secure-store"
import { Result } from "../../types/error.type";

type StorableItem = {
	key: string;
	value: string;
};

const storeValue = async ({ key, value}: StorableItem) => {
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
