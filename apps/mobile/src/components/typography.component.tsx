import { Text, TextProps } from 'react-native'
import { useTheme } from '@emotion/react'

import type { AppColors, AppTypo } from '../style/index'

type AppSpecificTypographyProps = {
	color?: AppColors
	type?: AppTypo
	children: string | number | JSX.Element
}

type TypographyProps = TextProps & AppSpecificTypographyProps

export const Typography = ({
	type = 'body',
	...baseProps
}: TypographyProps) => {
	const theme = useTheme()
	const typographyStyle = theme.typography[type];
	//const typographyColor = theme.color[color];

	return (
		<Text {...baseProps}
			style={[{ ...typographyStyle }]}
		/>
	)
}
