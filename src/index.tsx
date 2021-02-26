import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './Theme'
import AuthProvider from './Context/Auth'
import SelectedProvider from './Context/SelectedParts'
ReactDOM.render(
	<React.StrictMode>
		<SelectedProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</SelectedProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
