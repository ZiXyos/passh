import { Result } from '@/src/types';
import { IEntity } from '@/interfaces';
import { Item } from '@/src/types';
import { persist } from '../local.store';

type EntityParams<T = Item> = { data: T } & IEntity<T>;

class EntityItem<T = Item> implements IEntity<T> {

	data: T;

	createdAt: string;
	updatedAt: string;
	

	constructor(params: EntityParams<T>) {

		this.createdAt = params.createdAt;
		this.updatedAt = params.updatedAt;
		this.data = params.data;
	}

	async save<K extends string>(
		key: K
	): Promise<Result<EntityItem<T>>> {

		this.updatedAt = Date.now().toString();
		return persist({key, data: this});
	}
} 

export default EntityItem;
