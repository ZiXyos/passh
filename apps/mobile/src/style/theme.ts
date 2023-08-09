import { type TextStyle } from "react-native";

const spaceTokens = {
	xxxs: 2,
	xxs: 4,
	xs: 8,
	s: 12,
	m: 16,
	l: 24,
	xl: 32,
	xxl: 40,
	xxxl: 60,
}

const colorTokens = {
	ghostWhite: '#e8e9f3',
	silver: '#cecece',
	frenchGray: '#a6a6a8',
	raisinBlack: '#272635',
	nonPhotoBlue: '#b1e5f2'
}

const darkVariation = {
	spaceCadet: '#353347',
}

//type themeMode = 'dark' | 'light';

const mode = {
	dark: {
		color: colorTokens.frenchGray,
		background: colorTokens.raisinBlack
	},
	light: {
		color: colorTokens.raisinBlack,
		background: colorTokens.frenchGray
	}
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

// create 2 theme darkTheme | lightTheme and depending the colorshcheme using one ;)

export const theme = {
	color: {
		primary: colorTokens.raisinBlack,
		secondary: colorTokens.frenchGray,
		background: colorTokens.raisinBlack,
		...colorTokens,
		...darkVariation,
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
