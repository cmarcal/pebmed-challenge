import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { CreditCard } from './types';

interface ComponentsProps {
	infoCard: CreditCard;
	focused: string;
	handleValidCard({ issuer: string, maxLength: number }): void;
}

export function CreditCardWrapper(props: ComponentsProps) {
	const { infoCard, focused, handleValidCard } = props;
	return (
		<div id='PaymentForm' data-testid='CreditCardComponent'>
			<Cards
				focused={focused}
				cvc={infoCard?.cvv || ''}
				expiry={infoCard?.expiry || ''}
				name={infoCard?.name || ''}
				number={infoCard?.number || ''}
				placeholders={{ name: 'NOME NO CARTÃO' }}
				acceptedCards={['mastercard', 'visa', 'dinersclub', 'elo', 'amex']}
				callback={(card) => handleValidCard({ issuer: card.issuer, maxLength: card.maxLength })}
			/>
		</div>
	);
}
