interface IEntity<T> {
	
	createdAt: string;
	updatedAt: string;
	isEncrypted?: boolean;
}

type PreOptions = {
	type: 'save' | 'update' | 'delete';
}

interface IEntityModel<T> extends IEntity<T> {

	pre?:  (opt: PreOptions) => void;
} 

export {
	IEntity,
	IEntityModel
}
