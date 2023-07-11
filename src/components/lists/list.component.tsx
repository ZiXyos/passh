import styled from "@emotion/native";
import { ScrollViewProps } from "react-native";

const Root = styled.ScrollView<ScrollViewProps>`
	paddingVertical: ${({ theme }) => `${theme.spacing.xl}px`};
`;

const ScrollView = (props: ScrollViewProps) => (
	<Root {...props}>{props.children}</Root>
);

export {
	ScrollView
}
