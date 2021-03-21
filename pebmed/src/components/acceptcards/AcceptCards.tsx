import React from 'react';
import { Container, CardsWrapper, PaymentBy } from './styles';
import { AmericanExpressIcon } from './AmericanExpressIcon';
import { VisaIcon } from './VisaIcon';
import { MasterCardIcon } from './MasterCardIcon';
import { DinnerClubs } from './DinnerClubs';
import { Elo } from './Elo';

export function AcceptCards() {
	return (
		<Container>
			<CardsWrapper>
				<VisaIcon />
				<AmericanExpressIcon />
				<MasterCardIcon />
				<DinnerClubs />
				<Elo />
			</CardsWrapper>
			<PaymentBy>Pagamento feito por Iugu</PaymentBy>
		</Container>
	);
}
