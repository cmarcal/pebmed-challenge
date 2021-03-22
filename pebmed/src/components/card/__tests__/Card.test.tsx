import React from 'react';

import { screen } from '@testing-library/react';
import { WrapperWithIsPreviewContext } from 'src/util/tests/RenderWithContext';

import { Card } from '../Card';
const providerProps = {
	subscription: null,
	handleSubscription: null
};
let props;
const renderComponent = () => WrapperWithIsPreviewContext(<Card {...props} />, { providerProps });

describe('Card component', () => {
	beforeEach(() => {
		props = {
			title: 'Nome do plano',
			caption: '7 Dias Grátis',
			discountPercentage: 0.1,
			fullPrice: 600,
			id: 1,
			isAnnually: true,
			gateway: 'iugu',
			installmentsLimit: 12
		};
	});

	it('should render Card', async () => {
		renderComponent();
		expect(screen.getByTestId('CardComponent')).toBeInTheDocument();
	});
	it('should render title Card', async () => {
		renderComponent();
		expect(screen.getByText('Nome do plano')).toBeInTheDocument();
	});
	it('should render price Card', async () => {
		renderComponent();
		expect(screen.getByTestId('InitialPrice')).toHaveTextContent('De: R$ 600,00');
	});
	it('should render price with discount Card', async () => {
		renderComponent();
		expect(screen.getByTestId('DiscountPrice')).toHaveTextContent('Por: R$540,00');
	});
});
