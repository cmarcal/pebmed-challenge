import { ReactElement, useState } from 'react';
import { SubscriptionContext } from './SubscriptionContext';
import { subscription } from './interface.d';

export function SubscriptionProvider({ children }): ReactElement {
	const [subscription, seuSubscription] = useState<subscription>();

	const handleSubscription = (subscription) => seuSubscription(subscription);
	const contextProps = {
		subscription,
		handleSubscription
	};
	return <SubscriptionContext.Provider value={{ ...contextProps }}>{children}</SubscriptionContext.Provider>;
}
