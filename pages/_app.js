// Dependencies
import { ThemeProvider } from 'styled-components';
import Router from "next/router";
import * as gtag from "../lib/gtag";
import { Theme, GlobalStyle } from '../Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/spaces.css';

Router.events.on("routeChangeComplete", (url) => {
	window.scrollTo(0, 0);
  gtag.pageview(url);
});

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
