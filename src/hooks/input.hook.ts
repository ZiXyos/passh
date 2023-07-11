import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

const updateInputeValue = <T>(
	e: NativeSyntheticEvent<TextInputChangeEventData>,
	f: (data: string) => void
) => {
	f(e.nativeEvent.text);	
}

export {
	updateInputeValue
}
