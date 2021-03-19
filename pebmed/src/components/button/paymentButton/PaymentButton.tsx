import React from 'react';
import { Button } from '../Button';
import { ButtonWrapper } from './styles';
interface ComponentsProps {
	text: string;
	disabled: boolean;
	onClick: (e?: unknown) => void;
}

export function PaymentButton(props: ComponentsProps) {
	const { text, disabled, onClick } = props;

	return (
		<ButtonWrapper disabled={disabled}>
			<Button text={text} onClick={onClick} />
		</ButtonWrapper>
	);
}
