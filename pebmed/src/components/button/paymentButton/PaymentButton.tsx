import React from 'react';
import { Button } from '../Button';
import { ButtonWrapper } from './styles';
interface ComponentsProps {
	disabled: boolean;
	onClick: (e?: unknown) => void;
}

export function PaymentButton(props: ComponentsProps) {
	const { disabled, onClick } = props;

	return (
		<ButtonWrapper disabled={disabled}>
			<Button text='Ativar assinatura' onClick={onClick} />
		</ButtonWrapper>
	);
}
