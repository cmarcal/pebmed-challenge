import React from 'react';

import { screen, act, render } from '@testing-library/react';
import { WrapperWithIsPreviewContext } from 'src/util/tests/RenderWithContext';
import { SubscriptionsTemplate } from '../SubscriptionsTemplate';

const renderComponent = () => WrapperWithIsPreviewContext(<SubscriptionsTemplate />);

describe('Subscription list', () => {
	it('should render Subscription Container', async () => {
		await act(async () => {
			renderComponent();
		});
		screen.debug();
		expect(screen.getByTestId('SubscriptionContainer')).toBeInTheDocument();
	});
});
