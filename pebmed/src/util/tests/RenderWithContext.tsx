import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';

import { SubscriptionContext } from 'src/store/subscription';

export const WrapperWithIsPreviewContext = (component: ReactElement, { providerProps, ...renderOptions }) => {
	return render(
		<SubscriptionContext.Provider value={{ ...providerProps }}>{component}</SubscriptionContext.Provider>,
		renderOptions
	);
};
