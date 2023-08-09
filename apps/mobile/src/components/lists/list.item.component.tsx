import styled, { css } from "@emotion/native";
import { FunctionComponent } from "react";
import { ViewProps, View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Typography } from "../typography.component";
import { theme } from "@/src/style";

type ItemComponentProps = {
	icon?: string;
	title?: string;
	data?: string;
} & ViewProps;

const Root = styled.View<ItemComponentProps>`
	padding: ${({ theme }) => `${theme.spacing.xs}px`};
	margin-bottom: ${({ theme }) => `${theme.spacing.s}px`};
	marginHorizontal: ${({ theme }) => `${theme.spacing.m}px`};
	display: flex;
    flexDirection: row;
    flexWrap: wrap;
    justifyContent: space-between;
    alignItems: center;
	backgroundColor: ${({ theme }) => theme.color.spaceCadet};
	border-radius: 5px;
	border-width: 0.5px;
`

const ItemContainer = styled.View<ItemComponentProps>`
    flexDirection: row;
    flexWrap: wrap;
    justifyContent: center;
    alignItems: center;
`

const ItemList: FunctionComponent<ItemComponentProps> = ({ icon, title, data, ...props}: ItemComponentProps) => {

	return (
	<Root>
        <ItemContainer>
			<View style={{ paddingRight: 10}}>
				<FontAwesome name="key" size={30} />
			</View>
          <View style={{ paddingLeft: 20}}>
            <Typography>{title ? title : 'no title'}</Typography>
            <Typography>{ data ? data : 'no data'}</Typography>
          </View>
        </ItemContainer>
        <Text>...</Text>
      </Root>
	)
}

export {
	ItemList
}
