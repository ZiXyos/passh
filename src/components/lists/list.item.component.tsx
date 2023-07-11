import styled from "@emotion/native";
import { FunctionComponent } from "react";
import { ViewProps } from "react-native";

type ItemComponentProps = {
	icon?: string;
	title?: string;
	data?: string;
	key?: string
} & ViewProps;

const Root = styled.View<ItemComponentProps>``

const ItemList: FunctionComponent<ItemComponentProps> = ({ icon, title, data, key, ...props}: ItemComponentProps) => {

	return (<Root {...props}></Root>)
}

export {
	ItemList
}
