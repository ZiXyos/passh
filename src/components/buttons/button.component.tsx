import styled from "@emotion/native";
import { FunctionComponent } from "react";

import { Typography } from "../typography.component";

import type { ButtonProps } from "../types/button.type";

const Root = styled.TouchableOpacity<ButtonProps>`
	jusify-content: 'center';
	align-items: 'center';
	
	width: ${ props => 
		props.size === 'small'
			? "50px"
			: props.size === 'medium'
			? "75px" : "200px"
	};
	padding: ${ props => 
		props.size === 'small'
			? "7px 25px 8px"
			: props.size === 'medium'
			? "9px 30px 11px"
			: "14px 30px 16px"
	};
	color: ${ props =>
		props.primary ? "#E8E9F3" : "#ffffff"
	};
	border-width: 0.3px;
	background-color: ${ props => props.primary ? "#B1E5F2" : "#1b116e" };
	opacity: ${ props => props.disabled ? 0.5 : 1 };
`

const Button: FunctionComponent<ButtonProps> = ({
	label,
	onPress,
	...props
}: ButtonProps) => {

	const isInLineLabel = label && typeof label === 'string';
	const isComposedLabel = label && typeof label !== 'string';

	return (
		<Root onPress={ () => onPress?.() } {...props}>
			{isComposedLabel && 
				label.map(c => (
					<Typography 
						color="background"
						type="button" 
						key={c}
					>{c}</Typography>
				))
			}
			{isInLineLabel &&
				(<Typography 
					color="background" 
					type="button"
				>{label}</Typography>)
			}
		</ Root>
	)
}

export default Button;
