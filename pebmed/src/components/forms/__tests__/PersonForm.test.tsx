import React from 'react';

import { screen, render, fireEvent } from '@testing-library/react';
import { PersonForm } from '../PersonForm';
import userEvent from '@testing-library/user-event';

let props;
const renderComponent = () => render(<PersonForm {...props} />);

describe('Credit card forms', () => {
	beforeEach(() => {
		props = {
			handleChangePerson: jest.fn(),
			person: { fullname: '', email: '', cpf: '', id: '' }
		};
	});
	it('should render person form', () => {
		renderComponent();
		expect(screen.getByTestId('PersonFormComponent')).toBeInTheDocument();
	});
	it('should render all inputs in form', () => {
		renderComponent();

		expect(screen.getByPlaceholderText('Seu nome completo')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('seuemail@email.com')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('000.000.000-00')).toBeInTheDocument();
	});
	it('should chanage name input', () => {
		renderComponent();

		const name = screen.getByPlaceholderText('Seu nome completo');
		userEvent.type(name, 'Roberto Marcal');
		expect(props.handleChangePerson).toHaveBeenCalledTimes(14);
	});
	it('should chanage email input', () => {
		renderComponent();

		const email = screen.getByPlaceholderText('seuemail@email.com');
		userEvent.type(email, 'cmarcal.roberto@gmail.com');
		expect(props.handleChangePerson).toHaveBeenCalledTimes(25);
	});
	it('should chanage cpf input', () => {
		renderComponent();

		const cpf = screen.getByPlaceholderText('000.000.000-00');
		userEvent.type(cpf, '12345678910');
		expect(props.handleChangePerson).toHaveBeenCalledTimes(11);
	});
});
