import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';

import { SubscriptionProvider } from 'src/store/subscription';

export const WrapperWithIsPreviewContext = (component: ReactElement) => {
	return render(<SubscriptionProvider>{component}</SubscriptionProvider>);
};
