import React from 'react';
import { SubscriptionProvider } from 'src/store/subscription';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<SubscriptionProvider>
			<Component {...pageProps} />
		</SubscriptionProvider>
	);
}

export default MyApp;
