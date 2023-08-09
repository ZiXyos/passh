import styled from "@emotion/native";
import { FunctionComponent } from "react";
import { ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Root = styled.View`
	backgroundColor: ${({ theme }) => theme.color.background };
	flex: 1;
`

const ContainerView: FunctionComponent<ViewProps> = (props: ViewProps) => {

	const { top } = useSafeAreaInsets();
	return <Root {...props} style={{ paddingTop: top }}/>
}

export {
	ContainerView
}
