import React, { useState } from 'react';
import { Form } from './styles';
import { InputField } from 'src/components/input';

interface Person {
	fullName: string;
	email: string;
	cpf: string;
}

export function PersonForm() {
	const [person, setPerson] = useState<Person>(null);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setPerson({ ...person, [name]: value });
	};

	return (
		<Form>
			<InputField
				label='Nome completo'
				nameInput='fullName'
				value={person?.fullName || ''}
				placeholder='Seu nome completo'
				handleChange={handleChange}
			/>
			<InputField
				label='E-mail'
				nameInput='email'
				value={person?.email || ''}
				placeholder='seuemail@email.com'
				handleChange={handleChange}
			/>
			<InputField
				label='CPF'
				nameInput='cpf'
				value={person?.cpf || ''}
				placeholder='000 000 000 00'
				handleChange={handleChange}
			/>
		</Form>
	);
}
