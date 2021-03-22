import React from 'react';

import { screen, render } from '@testing-library/react';
import { CreditCardWrapper } from '../CreditCardWrapper';
import userEvent from '@testing-library/user-event';

let props;

const renderComponent = () => render(<CreditCardWrapper {...props} />);

describe('Credit card component', () => {
	beforeEach(() => {
		props = {
			infoCard: {
				cvv: 123,
				expiry: 1012,
				name: 'roberto c m junior',
				number: '0000 0000 0000 0000',
				handleValidCard: null
			}
		};
	});

	it('should render Credit card', async () => {
		renderComponent();
		expect(screen.getByTestId('CreditCardComponent')).toBeInTheDocument();
	});
	it('should render name card', async () => {
		renderComponent();
		expect(screen.getByText('roberto c m junior')).toBeInTheDocument();
	});
	it('should render cvv Card', async () => {
		renderComponent();
		expect(screen.queryAllByText(123)[0]).toBeInTheDocument();
	});
	it('should render exiry Card', async () => {
		renderComponent();
		expect(screen.getByText('10/12')).toBeInTheDocument();
	});
	it('should render number Card', async () => {
		renderComponent();
		expect(screen.getByText('0000 0000 0000 0000')).toBeInTheDocument();
	});
});
