import { type TextStyle } from "react-native";

const spaceTokens = {
	
}

const colorTokens = {
	ghostWhite: '#e8e9f3',
	silver: '#cecece',
	frenchGray: '#a6a6a8',
	raisinBlack: '#272635',
	nonPhotoBlue: '#b1e5f2'
}

const fontTokens = {
	regular: 'NunitoSans_400Regular',
	semiBold: 'NunitoSans_600SemiBold',
	bold: 'NunitoSans_700Bold',
	black: 'NunitoSans_900Black'
}

const fontSizeTokens = {
	body: 18,
	body2: 20
}

export const theme = {
	color: {
		primary: colorTokens.raisinBlack,
		secondary: colorTokens.frenchGray,
		background: colorTokens.nonPhotoBlue,
	},
	spacing: spaceTokens,
	radius: {
    	s: 4,
		m: 8,
    	l: 12,
  	},
	typography: {
		button: {
			//fontFamily: fontTokens.bold,
			fontSize: fontSizeTokens.body2
		} as TextStyle,
		body: {
			//fontFamily: fontTokens.regular,
			fontSize: fontSizeTokens.body,
			color: colorTokens.ghostWhite
		} as TextStyle
	},
}

type AppTheme = typeof theme;
type AppColors = keyof typeof theme.color;
type AppTypo = keyof typeof theme.typography;

export type {
	AppTheme,
	AppColors,
	AppTypo
};

declare module '@emotion/react' {
	export interface Theme extends AppTheme {}
}
