type OkResult<T> = {
	ok: true;
	value: T
}

type ErrorResult<E = Error> = {
	ok: false;
	error: E
}

type Result<T, E = Error> = 
	| OkResult<T>
	| ErrorResult<E>

export { Result };
