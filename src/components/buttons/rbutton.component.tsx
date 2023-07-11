import styled from "@emotion/native";
import { ButtonProps } from "../types/button.type";
import { Typography } from "../typography.component";
import { FunctionComponent } from "react";
import { FontAwesome } from "@expo/vector-icons";


type IconButtonProps = { 
	label: string 
} & ButtonProps;

const Root = styled.TouchableOpacity<ButtonProps>`
	background-color: ${({ theme }) => theme.color.ghostWhite };
	display: flex;
	justify-content: center;
	align-items: center;
	borderRadius: 50%;
	width: 55px;
	height: 55px;
`;

const RoundedButton: FunctionComponent<IconButtonProps> = ({ 
	onPress,
	size,
	label,
	disabled,
	...props
}: IconButtonProps) => {

	return (
		<Root onPress={ () => onPress?.() } {...props}>
			{props.children}	
		</ Root>
	)
}

export {
	RoundedButton
}
