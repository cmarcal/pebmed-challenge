import React from 'react';
import { Container, Input, Label } from './styles';
interface ComponentProps {
	nameInput: string;
	value: string;
	label: string;
	placeholder?: string;
	handleChange(event): void;
	handleFocus?(event): void;
}
export function InputField(props: ComponentProps) {
	const { label, nameInput, value, placeholder, handleChange, handleFocus } = props;
	return (
		<Container>
			<Label>{label}</Label>
			<Input
				name={nameInput}
				value={value || ''}
				onFocus={handleFocus}
				onChange={handleChange}
				placeholder={placeholder}
			/>
		</Container>
	);
}
