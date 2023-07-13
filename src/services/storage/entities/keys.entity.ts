import { IEntity } from "@/interfaces";
import { Result } from "@/types";
import { persist, updateItem } from "../local.store";

type KeyEntityArgs<K extends string> = { data: K };
class KeyEntity<T, K extends string> implements IEntity<T> {

	data: K;

	createdAt: string;
	updatedAt: string;
	
	constructor(params: KeyEntityArgs<K>) {

		this.createdAt = Date.now().toString();
		this.updatedAt = Date.now().toString();
		this.data = params.data;
	}
	
	async save<K extends string>(
		key: K
	): Promise<void> {

		this.updatedAt = Date.now().toString();
		persist({key, data: this});
	}

	async update(
		newVal: typeof KeyEntity
	): Promise<void> {
		return updateItem({
			key: this.data,
			newVal
		}) 
	}
}

export {
	KeyEntity
}
