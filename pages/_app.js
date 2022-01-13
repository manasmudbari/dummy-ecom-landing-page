import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css?family=Avenir'
					rel='stylesheet'
					type='text/css'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Inter'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
