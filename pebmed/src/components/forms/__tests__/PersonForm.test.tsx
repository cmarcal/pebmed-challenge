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
		const nameInput = 'Roberto Marcal';
		const name = screen.getByPlaceholderText('Seu nome completo');
		userEvent.type(name, nameInput);
		expect(props.handleChangePerson).toHaveBeenCalledTimes(nameInput.length);
	});
	it('should chanage email input', () => {
		renderComponent();
		const emilInput = 'cmarcal.roberto@gmail.com';
		const email = screen.getByPlaceholderText('seuemail@email.com');
		userEvent.type(email, emilInput);
		expect(props.handleChangePerson).toHaveBeenCalledTimes(emilInput.length);
	});
	it('should chanage cpf input', () => {
		renderComponent();

		const cpfInput = '12345678910';
		const cpf = screen.getByPlaceholderText('000.000.000-00');
		userEvent.type(cpf, cpfInput);
		expect(props.handleChangePerson).toHaveBeenCalledTimes(cpfInput.length);
	});
});
