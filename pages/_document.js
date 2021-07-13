// Dependencies
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
					<link rel="manifest" href="/manifest.json" />
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

					<Script src="/assets/js/hotjar.js"></Script>
					<Script src="/assets/js/google-tag-manager.js"></Script>
					<Script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<Script
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
					<Script src="/assets/js/axeptio.js"></Script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
