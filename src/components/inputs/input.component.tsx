import styled from "@emotion/native";
import { FunctionComponent, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputProps, useColorScheme } from "react-native";
/*
 * import { Button } from "../buttons";
 * import { FontAwesome } from "@expo/vector-icons";
 * import Colors from "@/src/constants/Colors";
*/

type InputTextBaseProps = {
	onChange?: (
		text: NativeSyntheticEvent<TextInputChangeEventData>
	) => void;
	placeholder?: string;
	placeholderTextColor?: string;
	disabled?: boolean
	
} & TextInputProps;

const Root = styled.TextInput<InputTextBaseProps>`
	height: 40px;
	borderWidth: 0.5px;
	borderRadius: 5px;
	backgroundColor: ${({ theme }) => theme.color.background};
	margin: ${({ theme }) => `${theme.spacing.s}px`};
`

const InputText = (
	{...props}: InputTextBaseProps
) => {

	console.log(Root.defaultProps?.theme?.spacing)
	return (
		<Root {...props} />
	)
}

const EmailInput: FunctionComponent<InputTextBaseProps> = ({
	onChange, 
	placeholder,
	...props
}) => (
	<Root onChange={onChange}
		placeholder={placeholder}
		textContentType="emailAddress"
		keyboardType="email-address"
		autoCorrect={false}
		autoCapitalize={"none"}
		{...props} 
	/>
)

const SearchInput: FunctionComponent<InputTextBaseProps> = ({
	onChange,
	placeholder,
	...props
}) => {
	return (
		<Root onChange={onChange}
			placeholder={placeholder}
			autoComplete="off"
			autoCapitalize="none"
			{...props}
		/>
	)
}

const PasswordInput: FunctionComponent<InputTextBaseProps> = ({
	onChange,
	placeholder,
	...props
}) => {
	
	const [visibility, setVisibility] = useState<boolean>(true);

	const toggleVisibilty = () => {
		console.log('toggle')
		setVisibility(!visibility)
	}

	return (
		<Root onChange={onChange} 
			placeholder={placeholder}
			secureTextEntry={visibility}
			autoCapitalize="none"
			autoCorrect={false}
			textContentType="password"
			{...props}
		>
		</Root>
	)
}

export {
	InputText,
	EmailInput,
	PasswordInput,
	SearchInput
}
