// Dependencies
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import * as gtag from '../lib/gtag';
import { Theme, GlobalStyle } from '../Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/spaces.css';
import Head from 'next/head';

Router.events.on('routeChangeComplete', (url) => {
	//   gtag.pageview(url);
});

// Render
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Legitbee - La garantie transmission</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={Theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
