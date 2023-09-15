export interface RequestOptions {
	headers: Record<string, string>
	body: Record<string, unknown>
	signal: AbortSignal
	validateStatus: (status: number) => boolean
}
