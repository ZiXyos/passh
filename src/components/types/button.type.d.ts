type ButtonProps = {
	primary?: boolean;
	label?: string | string[];
	onPress?: () => void;
	size?: "small" | "medium" | "large"
	disabled?: boolean
}

export type {
	ButtonProps
}
