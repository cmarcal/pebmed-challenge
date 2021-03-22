import React from 'react';

import { screen, render } from '@testing-library/react';
import { CreditCardForms } from '../CreditCardForms';
import userEvent from '@testing-library/user-event';

let props;

const renderComponent = () => render(<CreditCardForms {...props} />);

describe('Credit card forms', () => {
	beforeEach(() => {
		props = {
			installmentsLimit: 12,
			price: 600,
			handleClick: null
		};
	});
	it('should render credit card form', () => {
		renderComponent();
		expect(screen.getByTestId('CreditCardFormComponent')).toBeInTheDocument();
	});
	it('should render all inputs in form', () => {
		renderComponent();

		expect(screen.getByTestId('NumberCard')).toBeInTheDocument();
		expect(screen.getByTestId('ValidadeCard')).toBeInTheDocument();
		expect(screen.getByTestId('CVVCard')).toBeInTheDocument();
		expect(screen.getByTestId('nameCard')).toBeInTheDocument();
		expect(screen.getByTestId('Cupom')).toBeInTheDocument();
		expect(screen.getByTestId('InstallmentLimitPayment')).toBeInTheDocument();
	});
	it('should chanage values all inputs in form', () => {
		renderComponent();

		const number = screen.getByTestId('NumberCard');
		userEvent.type(number, '5200 0000 0000 0000');
		expect(number).toHaveValue('5200000000000000');

		const valid = screen.getByTestId('ValidadeCard');
		userEvent.type(valid, '10/12');
		expect(valid).toHaveValue('10/12');

		const cvv = screen.getByTestId('CVVCard');
		userEvent.type(cvv, '132');
		expect(cvv).toHaveValue('132');

		const name = screen.getByTestId('nameCard');
		userEvent.type(name, 'Roberto c m junior');
		expect(name).toHaveValue('Roberto c m junior'.toUpperCase());

		const cupom = screen.getByTestId('Cupom');
		userEvent.type(cupom, 'test cupom');
		expect(cupom).toHaveValue('test cupom');

		const installments = screen.getByTestId('InstallmentLimitPayment');
		expect(installments).toBeInTheDocument();
		const options = screen.getAllByTestId('select-option');
		expect(options).toHaveLength(12);

		expect(screen.getByTestId('PaymentButton').children[0]).not.toBeDisabled();
	});

	it('should not render installments', () => {
		props.installmentsLimit = 1;
		renderComponent();
		const installments = screen.queryByTestId('InstallmentLimitPayment');
		expect(installments).not.toBeInTheDocument();
	});

	it('should button is disabled', async () => {
		renderComponent();

		expect(screen.getByTestId('PaymentButton').children[0]).toBeDisabled();
	});
});
