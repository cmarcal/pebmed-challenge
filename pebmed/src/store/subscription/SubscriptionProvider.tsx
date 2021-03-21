import React, { ReactElement, useState, ReactNode } from 'react';
import { SubscriptionContext } from './SubscriptionContext';
import { subscription as ISubscription } from './interface';

export function SubscriptionProvider({ children }: { children: ReactNode }): ReactElement {
	const [subscription, seuSubscription] = useState<ISubscription>();

	const handleSubscription = (subscription: ISubscription) => seuSubscription(subscription);
	const contextProps = {
		subscription,
		handleSubscription
	};
	return <SubscriptionContext.Provider value={{ ...contextProps }}>{children}</SubscriptionContext.Provider>;
}
