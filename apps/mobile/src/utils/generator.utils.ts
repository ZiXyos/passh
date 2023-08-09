const genKey = <K extends string>(
	identifier: string, 
	keyName: string
): K => {
	return `${identifier}-${keyName}` as K;
}

export {
	genKey
}
