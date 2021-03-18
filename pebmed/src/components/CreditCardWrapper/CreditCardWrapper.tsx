import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { CreditCard } from './types';

interface ComponentsProps {
	infoCard: CreditCard;
	focused: string;
}

export function CreditCardWrapper(props: ComponentsProps) {
	const { infoCard, focused } = props;
	return (
		<div id='PaymentForm'>
			<Cards
				focused={focused}
				cvc={infoCard?.cvv || ''}
				expiry={infoCard?.expiry || ''}
				name={infoCard?.name || ''}
				number={infoCard?.number || ''}
				placeholders={{ name: 'NOME NO CARTÃO' }}
				acceptedCards={['mastercard', 'visa', 'dinersclub', 'elo', 'amex']}
			/>
		</div>
	);
}
