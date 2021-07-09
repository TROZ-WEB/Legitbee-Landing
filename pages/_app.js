// Dependencies
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from '../Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/spaces.css';

// Render
function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={Theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
