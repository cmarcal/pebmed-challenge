import React from 'react';

import { screen, render } from '@testing-library/react';
import { Button } from '../Button';
import { PaymentButton } from '../paymentButton';
import userEvent from '@testing-library/user-event';

let props;
const renderComponent = () => render(<Button {...props} />);
const renderComponentPaymentButton = () => render(<PaymentButton {...props} />);

describe('Button component', () => {
	beforeEach(() => {
		props = {
			text: 'Texto Botão',
			onClick: null
		};
	});

	it('should render Button', async () => {
		renderComponent();
		expect(screen.getByTestId('ButtonComponent')).toBeInTheDocument();
	});

	it('should render Text Button', async () => {
		props.text = 'Alteração de texto';
		renderComponent();
		expect(screen.getByText('Alteração de texto')).toBeInTheDocument();
	});

	it('should click button is trigger', async () => {
		const mockFunction = jest.fn();
		props.onClick = mockFunction;
		renderComponent();
		const component = screen.getByTestId('ButtonComponent');
		userEvent.click(component);
		expect(mockFunction).toHaveBeenCalledTimes(1);
	});
});

describe('Payment Button ', () => {
	beforeEach(() => {
		props = {
			disabled: false,
			onClick: null
		};
	});

	it('should render disabled button', async () => {
		props.disabled = true;
		renderComponentPaymentButton();

		expect(screen.getByTestId('ButtonComponent')).toBeDisabled();
	});

	it('should render enable button', async () => {
		renderComponentPaymentButton();
		expect(screen.getByTestId('ButtonComponent')).not.toBeDisabled();
	});
});
