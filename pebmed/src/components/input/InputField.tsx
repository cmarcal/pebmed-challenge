import React from 'react';
import { Label } from 'src/components/label';
import { Container, Input } from './styles';
interface ComponentProps {
	nameInput: string;
	value: string;
	label: string;
	placeholder?: string;
	testId?: string;
	handleChange(event): void;
	handleFocus?(event): void;
}
export function InputField(props: ComponentProps) {
	const { label, nameInput, value, placeholder, testId, handleChange, handleFocus } = props;
	return (
		<Container>
			<Label text={label} />
			<Input
				data-testid={testId}
				name={nameInput}
				value={value || ''}
				onFocus={handleFocus}
				onChange={handleChange}
				placeholder={placeholder}
			/>
		</Container>
	);
}
