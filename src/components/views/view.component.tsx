import styled from "@emotion/native";
import { FunctionComponent } from "react";
import { ViewProps } from "react-native";

const Root = styled.View`
	backgroundColor: ${({ theme }) => theme.color.background };
	flex: 1;
`

const ContainerView: FunctionComponent<ViewProps> = (props: ViewProps) => {

	return <Root {...props} />
}

export {
	ContainerView
}
