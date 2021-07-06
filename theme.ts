import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
	typography: {
		h1: {
			fontSize: 64,
			fontWeight: 100
		},
		h2: {
			fontWeight: 500,
			fontSize: 48
		},
		h3: {
			fontSize: 24,
			fontWeight: 500,
			fontVariant: 'small-caps'
		}
	}
});
