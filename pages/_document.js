// Dependencies
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" type="image/x-icon" href="/assets/images/fav.png" />
					<link rel="apple-touch-icon" href="/images/legitbee.png" />
					<meta
						name="description"
						content="Votre succession, enfin complète et simplifiée. Sécurisez votre patrimoine; transmettez vos biens numériques; et simplifiez les démarches pour vos proches."
					/>
					<meta name="og:title" content="Legitbee : Rien ne se perd, tout se transmet." />
					<meta
						name="og:description"
						content="Votre succession, enfin complète et simplifiée. Sécurisez votre patrimoine; transmettez vos biens numériques; et simplifiez les démarches pour vos proches."
					/>
					<meta name="og:type" content="website" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:creator" content="@Legitbee1" />
					<meta
						name="twitter:title"
						content="Legitbee : Rien ne se perd, tout se transmet."
					/>
					<meta
						name="twitter:description"
						content="Votre succession, enfin complète et simplifiée. Sécurisez votre patrimoine; transmettez vos biens numériques; et simplifiez les démarches pour vos proches."
					/>
					<meta name="theme-color" content="#004080" />

					<script async type="text/javascript" src="/assets/js/hotjar.js"></script>
					<script
						async
						type="text/javascript"
						src="/assets/js/google-tag-manager.js"
					></script>
					<script
						async
						type="text/javascript"
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script async type="text/javascript" src="/assets/js/axeptio.js"></script>
				</body>
			</Html>
		);
	}
}
