import React from 'react';

import { screen, act, render } from '@testing-library/react';
import { WrapperWithIsPreviewContext } from 'src/util/tests/RenderWithContext';
import { SubscriptionsTemplate } from '../SubscriptionsTemplate';
import * as getPlans from 'src/service/get/plans';
import { listSubscriptionMock } from './mock';

const getSubscriptions = () => jest.spyOn(getPlans, 'getPlans').mockImplementationOnce(listSubscriptionMock);
const renderComponent = () => WrapperWithIsPreviewContext(<SubscriptionsTemplate />);

describe('Subscription list', () => {
	it('should render Subscription Container', async () => {
		await act(async () => {
			renderComponent();
		});
		expect(screen.getByTestId('SubscriptionContainer')).toBeInTheDocument();
	});

	it('should subscriptions plans render', async () => {
		getSubscriptions();
		await act(async () => {
			renderComponent();
		});
		expect(screen.getByText('Premium Anual (Iugu)')).toBeInTheDocument();
		expect(screen.getByText('Premium Mensal (Iugu)')).toBeInTheDocument();
	});
});
