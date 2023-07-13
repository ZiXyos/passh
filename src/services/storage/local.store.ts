import AsyncStorage from "@react-native-async-storage/async-storage";
import { Result } from "@/src/types";

type PersistArgs<T, K extends string> = {
	key: K;
	data: T;
} 
async function persist<T, K extends string>({
	key,
	data 
}: PersistArgs<T, K>): Promise<Result<T>> {

	try {
		await AsyncStorage.setItem(key, JSON.stringify(data));
		return {
			ok: true,
			value: data	
		};
	} catch (err) {
		return {
			ok: false,
			error: Error("Impossible to store items")
		}
	}
}

type GetItemArgs<K, B extends boolean> = {
	key: K;
	itemExist?: B;
}
export async function getItem<K extends string, T, B extends boolean>({
	key,
	itemExist
}: GetItemArgs<K, false>): Promise<Result<T | null>>
export async function getItem<K extends string, T, B extends boolean>({
	key,
	itemExist
}: GetItemArgs<K, true>): Promise<Result<T>>
export async function getItem<K extends string, T>({
	key,
	itemExist
}: GetItemArgs<K, boolean>): Promise<Result<T | null>> {

	const data = await AsyncStorage.getItem(key);
	if (data !== null) {
		return {
			ok: true,
			value: JSON.parse(data) as T
		}
	} else if (!itemExist) {
		return persist({ key, data: "" as T })
	}

	return {
		ok: false,
		error: Error("function not implemented")
	}
}

type updateItemArgs<T, K extends string> = {
	key: K;
	newVal: Partial<T>
}
async function updateItem<T, K extends string>({
	key,
	newVal
}: updateItemArgs<T, K>): Promise<void> {

	try {
		const res = await AsyncStorage.getItem(key);
		if (!res) return;

		const prevObj = JSON.parse(res) as T;
		const updatedValue: T = { ...prevObj, ...newVal };

		await persist({key: key, data: updatedValue});
	} catch {
		console.log('an error occurred');
	}
}

type DelItemArgs<K extends string> = {
	key: K
}
async function deleteItem<K extends string>({
	key 
}: DelItemArgs<K>): Promise<void> {
	try {
		await AsyncStorage.removeItem(key);
	} catch {
		console.log('an error occurred');
	}
}

export {
	persist,
	updateItem,
	deleteItem
}
