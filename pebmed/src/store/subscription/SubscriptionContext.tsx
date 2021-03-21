import { createContext } from 'react';
import { subscription } from './interface.d';

interface Context {
	subscription: subscription;
	handleSubscription(subscription: subscription): void;
}

export const SubscriptionContext = createContext<Context>(null);
