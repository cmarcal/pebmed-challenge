import React from 'react';
import { Form } from './styles';
import { InputField } from 'src/components/input';
import { Person } from './interface';
import { cpfMaskInput } from 'src/helper';

interface ComponentProps {
	handleChangePerson(name, value): void;
	person: Person;
}

export function PersonForm(props: ComponentProps) {
	const { person, handleChangePerson } = props;

	return (
		<Form data-testid='PersonFormComponent'>
			<InputField
				label='Nome completo'
				nameInput='fullName'
				value={person?.fullName || ''}
				placeholder='Seu nome completo'
				handleChange={({ target }) => handleChangePerson(target.name, target.value)}
			/>
			<InputField
				label='E-mail'
				nameInput='email'
				value={person?.email || ''}
				placeholder='seuemail@email.com'
				handleChange={({ target }) => handleChangePerson(target.name, target.value)}
			/>
			<InputField
				label='CPF'
				nameInput='cpf'
				value={person?.cpf ? cpfMaskInput(person?.cpf) : ''}
				placeholder='000.000.000-00'
				handleChange={({ target }) =>
					target.value.length <= 14 && handleChangePerson(target.name, target.value.replace(/\D/g, ''))
				}
			/>
		</Form>
	);
}
