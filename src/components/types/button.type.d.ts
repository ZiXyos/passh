import { TouchableOpacityProps } from "react-native";

type ButtonProps = {
	primary?: boolean;
	label?: string | string[];
	onPress?: () => void;
	size?: "small" | "medium" | "large"
	disabled?: boolean
} & TouchableOpacityProps;

export type {
	ButtonProps
}
