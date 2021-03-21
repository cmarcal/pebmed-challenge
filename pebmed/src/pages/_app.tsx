import React from 'react';
import { AppProps } from 'next/app';
import { SubscriptionProvider } from 'src/store/subscription';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SubscriptionProvider>
			<Component {...pageProps} />
		</SubscriptionProvider>
	);
}

export default MyApp;
